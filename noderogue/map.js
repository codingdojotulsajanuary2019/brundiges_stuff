
// Node object that will make up our world
class Spot {
    constructor(fill, x, y) {
        this.fill = fill;
        this.entityOnSpot = null;
        this.entityInZone = null;
        this.XCoord = x;
        this.YCoord = y;
    }
    texture() {
        if (this.entityOnSpot != null) {
            return this.entityOnSpot.character;
        } else if (this.fill == 0) {
            return '  ';
        } else {
            return '■ ';
        }
    }
}

class Entity {
    constructor(name, character, player, spot) {
        this.name = name;
        this.character = character;
        this.player = player;
        this.spot = spot;
        spot.entityOnSpot = this;
    }
    greet() {
        var greet = "At " + this.spot.XCoord + "-" + this.spot.YCoord + ": ";
        if (this.player) {
            greet += "It's " + this.name + " the player character!";
        } else {
            greet += "A " + this.name;
        }
        return greet;
    }
    // Move from one spot to an adjacent one 
    // recieves integer dir. 0-north, 1-south, 2-east, 3-west
    // recieves a reference to map
    move(dir, map) {
        var oldSpot = this.spot;
        // console.log("Moving in direction " + dir);
        switch (dir) {
            case 0:
                if (map[this.spot.YCoord - 1][this.spot.XCoord].fill == 0) {
                    console.log("Moving north");
                    // Assigns player location to map
                    map[this.spot.YCoord - 1][this.spot.XCoord].entityOnSpot = this;
                    // Assigns new location to player
                    this.spot = map[this.spot.YCoord - 1][this.spot.XCoord]
                    // Destroys previous spot
                    oldSpot.entityOnSpot = null;
                    if(this.player){
                        this.scan(map);
                    }
                } else {
                    console.log("Cannot go north");
                }
                break;
            case 1:
                if (map[this.spot.YCoord + 1][this.spot.XCoord].fill == 0) {
                    console.log("Moving south");
                    map[this.spot.YCoord + 1][this.spot.XCoord].entityOnSpot = this;
                    this.spot = map[this.spot.YCoord + 1][this.spot.XCoord]
                    oldSpot.entityOnSpot = null;
                } else {
                    console.log("Cannot go south");
                }
                break;
            case 2:
                if (map[this.spot.YCoord][this.spot.XCoord + 1].fill == 0) {
                    console.log("Moving east");
                    map[this.spot.YCoord][this.spot.XCoord + 1].entityOnSpot = this;
                    this.spot = map[this.spot.YCoord][this.spot.XCoord + 1]
                    oldSpot.entityOnSpot = null;
                } else {
                    console.log("Cannot go east");
                }
                break;
            case 3:
                if (map[this.spot.YCoord][this.spot.XCoord - 1].fill == 0) {
                    console.log("Moving west");
                    map[this.spot.YCoord][this.spot.XCoord - 1].entityOnSpot = this;
                    this.spot = map[this.spot.YCoord][this.spot.XCoord - 1];
                    oldSpot.entityOnSpot = null;
                } else {
                    console.log("Cannot go west");
                }
                break;

            default:
                console.log("Errant input!");

                break;
        }
    }
    // Informs surrounding area of player location so enemies can move towards
    scan(map) {
        console.log("Scanning");
        this.scanRow(map, this.spot.XCoord, this.spot.YCoord + 1, 0, true, this.player);
        this.scanRow(map, this.spot.XCoord, this.spot.YCoord - 1, 1, true, this.player);
        this.scanRow(map, this.spot.XCoord - 1, this.spot.YCoord, 2, true, this.player);
        this.scanRow(map, this.spot.XCoord + 1, this.spot.YCoord, 3, true, this.player);
        console.log("Scan complete");
    }
    // Recursive scan of the surrounding area. 
    // Moves in opp direction of param dir - this is direction mob moves to find player
    // Prim represents whether row in direct line with player 
    scanRow(map, x, y, dir, prim, player) {
        // If spot is open
        if (map[y][x].fill == 0) {
            let entity = {
                'player': player,
                'dir': dir,
                'prim': prim
            }
            map[y][x].entityInZone = entity;

            switch (dir) {
                case 0:
                    // Move south
                    if(prim){
                        // Sending out secondary scanners east and west
                        this.scanRow(map, x-1, y, 2, false, player);
                        this.scanRow(map, x+1, y, 3, false, player);
                    }
                    return this.scanRow(map, x, y + 1, dir, prim, player);
                case 1:
                    // Move north
                    // Sending out secondary scanners east and west
                    if(prim){
                        // Sending out secondary scanners east and west
                        this.scanRow(map, x-1, y, 2, false, player);
                        this.scanRow(map, x+1, y, 3, false, player);
                    }
                    return this.scanRow(map, x, y - 1, dir, prim, player);
                case 2:
                    // Move west
                    if(prim){
                        // Sending out secondary scanners north and south
                        this.scanRow(map, x, y+1, 0, false, player);
                        this.scanRow(map, x, y-1, 1, false, player);
                    }
                    return this.scanRow(map, x - 1, y, dir, prim, player);
                case 3:
                    // Move east
                    if(prim){
                        // Sending out secondary scanners north and south
                        this.scanRow(map, x, y+1, 0, false, player);
                        this.scanRow(map, x, y-1, 1, false, player);
                    }
                    return this.scanRow(map, x + 1, y, dir, prim, player);

                default:
                    break;
            }
        } else {
            // console.log("Done recursing.");
            return true;
        }
    }
    // Used by monsters to move towards the player
    track(map){
        if(map[this.spot.YCoord][this.spot.XCoord].entityInZone != null){
            let dir = map[this.spot.YCoord][this.spot.XCoord].entityInZone.dir;
            this.move(dir, map);
        } else {
            console.log("Lost track of player!");
        }
    }

}

function compileMap(map) {
    for (let i = 0; i < map.length; i++) {
        const row = map[i];
        for (let j = 0; j < row.length; j++) {
            spot = new Spot(row[j], j, i)
            row[j] = spot;
        }
    }
}
// Converts map into an array of strings
function renderMap(map) {
    map.forEach(row => {
        var str = ""
        row.forEach(spot => {
            str += spot.texture();
            // str += spot.YCoord
        });
        console.log(str);
    });
}

function renderScan(map) {
    map.forEach(row => {
        var str = ""
        row.forEach(spot => {
            if (spot.entityInZone != null) {
                str += spot.entityInZone.dir + ' ';
            } else {
                str += spot.texture();
            }
        });
        console.log(str);
    });
}

var map = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

// var map = [
//     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//     [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
//     [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
//     [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
//     [1, 0, 0, 0, 0, 1, 0, 0, 0, 1],
//     [1, 0, 0, 0, 0, 1, 0, 0, 0, 1],
//     [1, 0, 0, 0, 0, 1, 0, 0, 0, 1],
//     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
// ];

compileMap(map);

var one = map[4][2];
var two = map[1][4];
var thr = map[2][8];

// console.log(one);

var player = new Entity("Chungus", '@ ', true, one);
var skeleton1 = new Entity("Gnarly Skeleton", 'S ', false, two);
var skeleton2 = new Entity("Crooked Skeleton", 'S ', false, thr);


renderMap(map);
player.move(0, map);
skeleton1.track(map);
skeleton1.track(map);
skeleton1.track(map);
skeleton2.track(map);
renderMap(map);

// console.log(player.greet());
// console.log(skeleton1.greet());
// console.log(skeleton2.greet());
// console.log("Spot: " + one.texture());


// console.log("■ ■ ■ ■ ■");
// console.log("■ @     ■");
// console.log("■     S ■");
// console.log("■       ■");
// console.log("■   S   ■");
// console.log("■ ■ ■ ■ ■");
