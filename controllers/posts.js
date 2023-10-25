import mongoose from "mongoose"
import postMessage  from "../Models/postMessage.js"

export const getPosts = async (req, res )=>{
    try {
        const postMessages =  await postMessage.find();
        console.log(postMessages)
        res.status(200).json({response: 'Ok', message: postMessages})
    } catch (error) {
        res.status(404).json({response: error.message});
    }
}

export const createPost  =  async (req, res)=>{
    try {
        const post = req.body;
        const postcreated = await new postMessage(post);
        postcreated.save();
        res.status(200).json({response: "Post Added", message: postcreated})
        
    } catch (error) {
        res.status(409).json({message: error.message})
        
    }

}