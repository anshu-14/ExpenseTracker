const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');//importing the db connection file
const cors = require('cors');



dotenv.config();//adds .env to process and can be used throughout the project using process.env

const app = express();//create insatance of express 
// Allow requests from your frontend
app.use(cors);
app.use(express.json());//parse the json that we passed and attach it in req.body
connectDB();//connect to the database
app.get('/', (req, res) => res.send('API is running...'));



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
