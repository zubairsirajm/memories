import express, { application } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import postRoutes from './routes/posts.js'


const App = express();

App.use(bodyParser.json({ limit: "30mb", extended: true}));
App.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
App.use(cors());
App.use('/posts', postRoutes )
// db connection

const DB_URI = `mongodb+srv://zubairsiraj:zubairsiraj123@cluster0.lj0bq3x.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp`
const PORT = process.env.PORT || 5000;

mongoose.connect(DB_URI,{})
    .then(App.listen(PORT, ()=> console.log(`Server is listening on Port ${PORT}`)))
    .catch((err)=> console.log(err.message))

