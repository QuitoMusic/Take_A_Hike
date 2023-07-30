// Import the necessary models
const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// Define the associations between the models
User.hasMany(Post, {
    foreignKey: 'user_id' 
});

// Post belongs to a User (Post belongs to a single User)
Post.belongsTo(User, {
    foreignKey: 'user_id' 
});

// Comment belongs to a User (Comment belongs to a single User)
Comment.belongsTo(User, {
    foreignKey: 'user_id', 
    onDelete: 'cascade', 
    hooks: true 
});

// Comment belongs to a Post (Comment belongs to a single Post)
Comment.belongsTo(Post, {
    foreignKey: 'post_id', 
    onDelete: 'cascade', 
    hooks: true 
});

// User has a one-to-many relationship with Comment (User has many Comments)
User.hasMany(Comment, {
    foreignKey: 'user_id', 
    onDelete: 'cascade', 
    hooks: true 
});

// Post has a one-to-many relationship with Comment (Post has many Comments)
Post.hasMany(Comment, {
    foreignKey: 'post_id', 
    onDelete: 'cascade', 
    hooks: true 
});

//Export models consolidated in the current file//
module.exports = { User, Post, Comment };

