const mongoose = require('mongoose');
const XWord = mongoose.model('xword');
const { Client } = require('pg');

const client = new Client({
    database: 'postgres',
    host: 'localhost',
    user: 'postgres',
    password: 'cheeseburger52',
    port: 5432,
});

client.connect();

function scrubWord(str) {
    str = str.toUpperCase();
    var newWord = "";
    for (let x = 0; x < str.length; x++) {
        switch (str.charAt(x)) {
            case "A": case "B": case "C": case "D": case "E": case "F": case "G": case "H":
            case "I": case "J": case "K": case "L": case "M": case "N": case "O": case "P":
            case "Q": case "R": case "S": case "T": case "U": case "V": case "W": case "X":
            case "Y": case "Z":
                newWord += str.charAt(x);
                break;
            default:
                // console.log("Scrubbed character: " + str.charAt(x));
                break;
        }
    }
    return newWord;
}
function parseChars(str) {
    var arr = [];
    for (let x = 0; x < str.length; x++) {
        arr.push(str.charAt(x));
    }
    return arr;
}
function parseVowels(str) {
    var arr = []
    for (let x = 0; x < str.length; x++) {
        // console.log(str.charAt(x));

        switch (str.charAt(x)) {
            case "A": case "E": case "I": case "O": case "U":
                arr.push(0);
                break;
            default:
                arr.push(1);
                break;
        }
    }
    return arr;
}

function parseSearchStr(str) {
    let q = "where ";
    for (let x = 0; x < str.length; x++) {
        if (str.charAt(x) == '0' || str.charAt(x) == '1') {
            q += "vowels[" + (x + 1) + "] = " + str.charAt(x) + " AND ";
        } else {
            q += "chars[" + (x + 1) + "] = '" + str.charAt(x) + "' AND ";
        }
    }
    return q;
}

function createWord(word, que, x) {

    let text = ' ($' + x + ', $' + (x + 1) + ', $' + (x + 2) + ', $' + (x + 3) + '),';
    que.text += text;
    que.values.push(word);
    que.values.push(parseChars(word));
    que.values.push(parseVowels(word));
    que.values.push(word.length);
    return que;
}

module.exports = {
    index: (req, res) => {
        console.log("Dumping a hot plate every word in the database on requester's lap");

        client.query('SELECT word FROM xwords ORDER BY word', (err, data) => {
            if (err) {
                res.json({ message: false, data: err });
            } else {
                res.json({ message: true, data: data.rows });
            }
        });
    },
    create: (req, res) => {
        var newWord
        var que = {
            'text': "insert into xwords (word, chars, vowels, length) VALUES",
            'values': []
        }
        if (req.body['word']) {
            console.log("Attempting to create new word by word ", req.body['word']);
            let word = scrubWord(req.body['word'], que, 1);
            que = createWord(word);
        }
        if (req.body['words']) {
            console.log("Attempting to create new words by list", req.body['words']);
            let x = 1;
            req.body['words'].forEach(w => {
                let word = scrubWord(w);
                que = createWord(word, que, x);
                x += 4;
            });
        }
        que.text = que.text.slice(0, que.text.length-1);
        // console.log(que);
        // res.json({ message: true, data: "Big chungus." });

        client.query(que.text, que.values, (err, data) => {
            if (err) {
                console.log("Creation attempt errant!", err);
                res.json({ message: false, err: err });
            } else {
                // console.log("Creation attempt unerring!");
                res.json({ message: true, data: data });
            }
        });
    },
    getWords: (req, res) => {
        const str = req.params.str.toUpperCase();
        console.log("Finding words that match pattern " + str);
        var q = 'SELECT word FROM xwords ';
        q += parseSearchStr(str);
        q += 'length = ' + str.length + ' ORDER BY word ASC';
        // console.log("Running query: " + q);

        client.query(q, (err, data) => {
            if (err) {
                console.log("Err:", err);
                res.json({ message: false, data: err });
            } else {
                console.log("Success! Data:", data.rows);
                res.json({ message: true, data: data.rows, query: q });
            }
        });
    },
    destroy: (req, res) => {
        const id = req.params.id;
        console.log("Deleting word", req);

        XWord.findOneAndDelete({ _id: id }, (err, word) => {
            if (err) {
                res.json({ message: false, error: err });
            } else {
                res.json({ message: true, word: word });
            }
        });
    },
    show: (req, res) => {
        const id = req.params.id;
        XWord.findOne({ _id: id }, (err, word) => {
            if (err) {
                res.json({ message: false, error: err });
            } else {
                res.json({ message: true, word: word });
            }
        });
    },
    update: (req, res) => {
        XWord.update({ _id: req.params.id }, { title: req.body.title, description: req.body.description, completed: req.body.completed }, opts, function (err, task) {
            console.log("Recieved updated request: ", req.body);
            if (err) {
                console.log('Errant update request!: ', err);

                res.json({ message: false, error: err });
            } else {
                console.log('Unerring request! Word updated!');
                res.json({ message: true, word: word });
            }
        });
    },
};
