const { User } = require('../models');

const userData = [
  {
    username: "Pepe",
    email: "pedrito@gmail.com",
    password: "password1234"
  },
  {
    username: "Nehambe",
    email: "consolida@gmail.com",
    password: "password1234"
  },
  {
    username: "Laryn",
    email: "Laryn@gmail.com",
    password: "password1234"
  },
  {
    username: "Yosemite",
    email: "rigged@gmail.com",
    password: "password1234"
  },
  {
    username: "Oppenheimer",
    email: "bomb@gmail.com",
    password: "password1234"
  }
];

const seedUsers = () => User.bulkCreate(userData);


module.exports = seedUsers;
