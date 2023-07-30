const { Post } = require("../models");

const postData = [
  {
    title: "Coding is so difficult!",
    post_text:
      "Why is this project so complicated?!",
    user_id: 1,
  },
  {
    title: "I love computers and gaming.",
    post_text: "Still looking for the perfect console but handhelds are my weakness.",
    user_id: 3,
  },
  {
    title: "Instagram",
    post_text:
      "How do I post multiple photos at the same time on Instagram?",
    user_id: 2,
  },
  {
    title: "Vs Code is a masterpiece of a software.",
    post_text:
      "Javascript is boss!",
    user_id: 4,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
