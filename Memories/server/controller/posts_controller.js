const Post = require('../models/Post.js')
module.exports.getPost = async function(req , res){
    try{
        const posts = await Post.find();
        console.log(posts);
        if(posts){
            res.status(200).json(posts);
        }else{
            res.status(401).json({
                message:"Posts Can not be fetched"
            }); 
        }
    }catch(error){
        res.status(404).json({
            message:error.message
        });
    }
}

module.exports.createPost = async function(req , res){
    const body = req.body;
    const newPost = Post.create(body);
    console.log(newPost);
    try{
       await  newPost.save();
       res.status(201).json(newPost);
    }catch(error){
        res.sataus(409).json({message:error.message})
    }
}