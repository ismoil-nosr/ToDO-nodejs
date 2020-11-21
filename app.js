require('dotenv').config();

//Modules
const bodyParser = require('body-parser');
const express = require('express');
const session = require('express-session');
const flash = require('connect-flash');
const methodOverride = require('method-override');
const handlebars = require('express-handlebars');

//Const declares
const app = express();
const port = process.env.APP_PORT;

//Initialize  DB connection
db = require('./initDB')();

//Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(methodOverride('_method'));
app.use(session({
	secret:'octopus',
	saveUninitialized: true,
	resave: true
}));
app.use(flash());

//Set & Configure template engine settings
app.set('view engine', 'hbs');
app.engine('hbs', handlebars({
    extname: 'hbs',
    defaultLayout: 'app',
}));

//Routes
const tasksRouter = require(__dirname + '/routes/tasksRouter.js');

app.use('/', tasksRouter);
app.use(function(req, res, next) {
    res.status(404).send('Not found!');
});

//Expose app
app.listen(port);