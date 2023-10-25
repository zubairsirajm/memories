import  Express  from "express";
import {getPosts, createPost} from '../controllers/posts.js'

const Router = Express.Router();

Router.get('/', getPosts );
Router.post('/', createPost );

export default Router;