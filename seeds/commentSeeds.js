const { Comment } = require("../models");
const commentData = [
  {
    comment_text: "I'll be there!",
    post_id: 3,
    user_id: 1
  },
  {
    comment_text: "Sure thing!",
    post_id: 1,
    user_id: 4
  },
  {
    comment_text: "Corkscrew Swamp Sanctuary",
    post_id: 4,
    user_id: 2
  },
];
const seedComments = () => Comment.bulkCreate(commentData);
module.exports = seedComments;