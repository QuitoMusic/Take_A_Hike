const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const sequelize = require('../config/connection');

// Route to get all posts and their associated comments
router.get('/', (req, res) => {
    Post.findAll({
        attributes: [
            'id',
            'post_text',
            'title',
            'created_at',
        ],
        order: [[ 'created_at', 'DESC']], 
        include: [
            {
                model: User,
                attributes: ['username'] 
            },
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'], 
                include: {
                    model: User,
                    attributes: ['username'] 
                }
            }
        ]
    })
    .then(dbPostData => {
        const posts = dbPostData.map(post => post.get({ plain: true }));
        res.render('homepage', {
            posts,
            loggedIn: req.session.loggedIn
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// Route to get a single post and its associated comments based on the post's ID
router.get('/post/:id', (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id 
        },
        attributes: [
            'id',
            'post_text',
            'title',
            'created_at',
        ],
        include: [
            {
                model: User,
                attributes: ['username'] 
            },
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'], 
                include: {
                    model: User,
                    attributes: ['username'] 
                }
            }
        ]
    })
    .then(dbPostData => {
        // If no post is found with the given ID, return a 404 error message
        if (!dbPostData) {
            res.status(404).json({ message: 'No post found' });
            return;
        }
        const post = dbPostData.get({ plain: true });
        res.render('singlePost', {
            post,
            loggedIn: req.session.loggedIn
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// Route to render the login page
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

// Route to render the signup page
router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('signup');
});


module.exports = router;
