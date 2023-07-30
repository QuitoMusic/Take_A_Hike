const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

// Check if the app is running in a JawsDB environment (e.g., Heroku)
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  // Create a connection using the local database credentials
  sequelize = new Sequelize(
    process.env.DB_NAME,       
    process.env.DB_USER,       
    process.env.DB_PASSWORD,   
    {
      host: 'localhost',       
      dialect: 'mysql',        
      port: 3306               
    }
  );
}


module.exports = sequelize;
