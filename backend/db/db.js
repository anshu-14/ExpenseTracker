const mongoose = require("mongoose");

const db=async()=>{
try {
    mongoose.set('strictQuery',false)
    await mongoose.connect(process.env.MONGO_URL)
    console.log("Connection Completed");
} catch (error) {
 console.log(`Conneection Error ${error}`);   
}
}
module.exports={db}