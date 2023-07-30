const { User } = require('../models');

const userData = [
  {
    username: "Francisco",
    email: "frankie@gmail.com",
    password: "password1234"
  },
  {
    username: "Nina",
    email: "nina@gmail.com",
    password: "password1234"
  },
  {
    username: "Josian",
    email: "Josian@gmail.com",
    password: "password1234"
  },
  {
    username: "Petra",
    email: "rocksy@gmail.com",
    password: "password1234"
  },
  {
    username: "Juan",
    email: "elnene@gmail.com",
    password: "password1234"
  }
];

const seedUsers = () => User.bulkCreate(userData,{individualHooks: true});


module.exports = seedUsers;
