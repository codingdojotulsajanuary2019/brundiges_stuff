const path = require("path");
const express = require("express");
const PORT = 8000;
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join( __dirname, './public/dist/TaskAPI')));

require('./server/config/mongoose');
require('./server/config/routes')(app);

app.listen(PORT, ()=>{
    console.log(`Listening on port: ${PORT}!`);
});