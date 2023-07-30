const path = require('path');
const express = require('express');
const routes = require('./controllers/');
const sequelize = require('./config/connection');
const exphbs = require('express-handlebars');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const helpers = require('./utils/helpers');
require('dotenv').config();

// Create an instance of handlebars with custom helpers 
const hbs = exphbs.create({ helpers });

// Configure session settings
const sess = {
    secret: "Super secret secret", 
    cookie: { maxAge: 7200000 }, 
    resave: false, 
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize 
    })
};


const app = express();
const PORT = process.env.PORT || 3001;

// Set the static folder to serve static files like CSS and images 
app.use(express.static(path.join(__dirname, 'public')));

// Set handlebars as the view engine 
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(session(sess));

app.use(routes);

// Sync the Sequelize models and start server port
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening on port ' + PORT));
});
