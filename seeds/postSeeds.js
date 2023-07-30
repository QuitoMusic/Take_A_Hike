const { Post } = require("../models");

const postData = [
  {
    title: "Hiking party in the Everglades",
    post_text:
      "On August 31st I will be taking a stroll in the Everglades if anyone would like to join me?",
    user_id: 1,
  },
  {
    title: "Best scenic hikes in Florida",
    post_text: "I'm curious about what the best scenic hikes are in Florida. Everyone says the Everglades, but what do you think? ",
    user_id: 3,
  },
  {
    title: "Solo traveler in Florida",
    post_text:
      "I am new to Florida and would like to meet new people. I am going for a hike at Highlands Hammock State Park soon. Would anyone want to join me?",
    user_id: 2,
  },
  {
    title: "Advanced hiker looking for someone to join.",
    post_text:
      "The Myakka Hiking Trail is one of the longest trails in Florida, and I would like to have a partner to join me. Any takers?",
    user_id: 4,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
