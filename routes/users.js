const express = require('express');
const router = express.Router();
const User = require('../models/User');


// GET BACK ALL THE POSTS
router.get('/', async (req, res) =>{
    try{
        const posts = await User.find();
        res.json(posts); 
    }catch(err){
        res.json({message: err})
    }
})


// SUBMITS A POST
router.post('/', async (req, res) =>{
    const user = new User({
        username: req.body.username,
        lastname: req.body.lastname,
        email: req.body.email,
        phone: req.body.phone
    })

    try{
        const savedPost = await user.save()
        res.json(savedPost)
    }catch(err){
        res.json({message: err})
    }
})

// SPECIFIC POST
router.get('/:postId', async (req, res) =>{
    try{
        const post = await User.findById(req.params.postId);
        res.json(post);
    }catch(err){
        res.json({message: err});
    }
})

// DELETE POSt
router.delete('/:postId', async (req, res) =>{
    try{
        const removedUser = await User.remove({_id: req.params.postId});
        res.json(removedUser)
    }catch(err){
        res.json({message: err})
    }
})


// Update a post
router.patch('/:postId', async (req, res) =>{
    try{
        const updatedUser = await User.update({_id: req.params.postId}, {$set: {title: req.body.title, description: req.body.description}})
        res.json(updatedUser)
    }catch(err){
        res.json({message: err})
    }
})

module.exports = router;