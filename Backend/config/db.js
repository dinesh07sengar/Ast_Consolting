const mongoose = require('mongoose')

const connect=async()=>{
    try {
        await mongoose.connect("mongodb+srv://dinesh:sengars@cluster0.bsxdwit.mongodb.net/blogapp?retryWrites=true&w=majority")
        console.log("connected to server")
        
    } catch (error) {
        console.log(error)
        
    }

}
module.exports={connect}