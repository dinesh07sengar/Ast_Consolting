const express = require('express')
const cors = require('cors')
const { connect } = require('./config/db')
const { router } = require('./routes/image_route')
const { User_route } = require('./routes/user_route')
const { album_router } = require('./routes/album_route')


const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static('public'))
app.get("/",(req,res)=>{
    res.send("welcome to my dark side")
})

app.use("/img",router)
app.use("/user",User_route)
app.use("/other",album_router)

app.listen(4800,async()=>{
    try {
        connect()
        console.log("your server is running at http://localhost:4800")
    } catch (error) {
        console.log(error)
    }

})