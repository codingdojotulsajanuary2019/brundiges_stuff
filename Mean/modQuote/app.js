const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var session = require('express-session');
var flash = require('express-flash');
const PORT = 8000;

var path = require('path');
app.use(express.static(path.join(__dirname, './client/static')));
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');
app.use(session({
	secret: 'frog',
	resave: false,
	saveUninitialized: true,
	cookie: { maxAge: 60000 }
  }))
app.use(flash());

app.use(bodyParser.urlencoded({extended: true}));

require('./server/config/mongoose');
require('./server/config/routes')(app);

app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}!`);
});
