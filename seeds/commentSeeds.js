const { Comment } = require('../models');

const commentData = [
  {
    comment_text: "What?",
    post_id: 3,
    user_id: 1
  },
  {
    comment_text: "Yes!",
    post_id: 1,
    user_id: 4
  },
  {
    comment_text: "You're 100% correct!",
    post_id: 4,
    user_id: 2
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
