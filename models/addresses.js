const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Address extends Model {}

Address.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    streetAddress: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    zipCode: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isNumeric: true,
        len: [5, 10],
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'address',
  }
);

// Data for seeding the Address table
const addressData = [
  {
    name: "Wekiwa Springs State Park",
    streetAddress: "1800 Wekiwa Cir",
    city: "Apopka",
    state: "FL",
    zipCode: "32712"
  },
  // Add the rest of the addresses here
  {
    name: "Biscayne National Park",
    streetAddress: "9700 SW 328th Street",
    city: "Homestead",
    state: "FL",
    zipCode: "33033"
  },
  {
    name: "Dry Tortugas National Park",
    streetAddress: "40001 State Highway 9336",
    city: "Homestead",
    state: "FL",
    zipCode: "33034"
  },
  {
    name: "Alafia River State Park",
    streetAddress: "14326 S County Rd 39",
    city: "Lithia",
    state: "FL",
    zipCode: "33547"
  },
];

// Function to seed the Address table with addressData
const seedAddresses = () => Address.bulkCreate(addressData);

module.exports = { Address, seedAddresses };

