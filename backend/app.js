const express=require('express');
const cors=require('cors');
const {db}=require('./db/db');
const {readdirSync}=require('fs')
const app=express();
require("dotenv").config();
const PORT = process.env.PORT;
//middleware
app.use(express.json())
app.use(cors())
// app.get('/',(req,res)=>{
//     res.send('Hello')
// })
//routes
readdirSync('./routes').map((route) => app.use('/api/v1',require('./routes/' + route)));
const server = () => {
    db()
    app.listen(PORT,()=>{

        console.log(`Listening to port :  ${PORT}`);
    })
};
server();
