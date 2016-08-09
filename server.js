var orm = require('./config/orm.js');
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var PORT = 8080;
var app = express();
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
var router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));// should this be true or false??
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
//app.use(express.static('public'));

app.use(express.static(process.cwd() + '/public'));
//app.use('/static', express.static('public'));

var routes = require('./config/controller.js');
app.use('/', routes);

app.listen(process.env.PORT || 8000, function() {
    console.log('App listening on PORT ' + PORT);
});



app.listen(PORT);








