const express = require('express');
const mongoose = require('mongoose');
const { Imagemodel } = require('../models/image.model');
const { validation } = require("../middleware/validation")

const album_router = express.Router();
album_router.use(validation)

album_router.post("/:id", async (req, res) => {

    try {
        let id = req.params.id
        console.log(id)
       let data = await Imagemodel.findById(id)
        console.log(data)

        data.album.push(req.body.user)
        await data.save();
        res.status(200).send({ "msg": "succesfully added",data })

    } catch (error) {
        res.status(404).send(error)

    }
})

album_router.post("/comment/:id", async (req, res) => {
   

    try {
        id = req.params.id
        console.log(req.body)
        let data = await Imagemodel.findById(id)
        console.log(data)
        let obj={user:req.body.user,cmnt:req.body.cmnt}
        data.comments.push(obj)
        await data.save();
        res.status(200).send({ "msg": "succesfully added",data })

    } catch (error) {
        res.status(404).send(error)

    }
})
album_router.patch("/:id",async(req,res)=>{
    try {
        id = req.params.id
        let data = await Imagemodel.findByIdAndUpdate(id,req.body)
        res.status(200).send({ "msg": "succesfully added",data })
        
    } catch (error) {
        res.status(404).send(error)
        
    }
})
album_router.get("/", async (req, res) => {
    try {
      
        let data = await Imagemodel.find()
        let arr = []
        data.map((ele, i) => {
            if (ele.album.includes(req.body.user)) {
                arr.push(ele)
            }
        })
        for (let i = 0; i < arr.length; i++) {
             arr[i]['album']=undefined
          }
          console.log(arr)
        
        res.status(200).send({ "msg": "succesfully added", "data": arr})

    } catch (error) {
        res.status(404).send(error)

    }
})
module.exports={album_router}