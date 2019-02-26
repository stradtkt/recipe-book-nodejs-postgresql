const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cons = require('consolidate'),
    dust = require('dustjs-helpers'),
    pg = require('pg'),
    c = require('./config'),
    app = express();

const connection = `postgres://${c.username}:${c.password}@localhost/recipebookdb`;

app.engine('dust', cons.dust);
app.set('view engine', 'dust');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended': false}));


app.get('/', (req, res) => {
    res.render('index');
});

app.listen(3000, () => {
    console.log("App is on port 3000");
});
