const express = require('express');
const router = express.Router();
const Post = require('../models/Post');


// GET BACK ALL THE POSTS
router.get('/', async (req, res) =>{
    const { page = 1, limit = 10 } = req.query;

    try{
        const posts = await Post.find().limit(limit * 1).skip((page - 1) * limit).exec();
        res.json(posts); 
    }catch(err){
        res.json({message: err})
    }
})


// SUBMITS A POST
router.post('/', async (req, res) =>{
    const post = new Post({
        title: req.body.title,
        description: req.body.description,
        img: req.body.img
    })

    try{
        const savedPost = await post.save()
        res.json(savedPost)
    }catch(err){
        res.json({message: err})
    }
})

// SPECIFIC POST
router.get('/:postId', async (req, res) =>{
    
    try{
        const post = await Post.findById(req.params.postId);
        res.json(post);
    }catch(err){
        res.json({message: err});
    }
})

// DELETE POSt
router.delete('/:postId', async (req, res) =>{
    try{
        const removedPost = await Post.remove({_id: req.params.postId});
        res.json(removedPost)
    }catch(err){
        res.json({message: err})
    }
})


// Update a post
router.patch('/:postId', async (req, res) =>{
    try{
        const updatedPost = await Post.update({_id: req.params.postId}, {$set: {title: req.body.title, description: req.body.description, img: req.body.img}})
        res.json(updatedPost)
    }catch(err){
        res.json({message: err})
    }
})

module.exports = router;