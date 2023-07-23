const express = require('express');
const {Imagemodel} = require('../models/image.model');
const {upload} = require("../middleware/Imagehandle")
const { validation } = require("../middleware/validation")

const router = express.Router();


router.post('/images',validation, upload.single('image'), async (req, res) => {
    try {
      const { imageName, caption,user } = req.body;
      console.log(req.body)
      
      const image = {
        
        // logo:req.file.Buffer,
        user:req.body.user,
        imageType: req.file.mimetype,
        imageUrl: req.file.filename,
        caption,
      };
      // console.log(image)
      const newImage = await Imagemodel.create(image);
      res.json(newImage);
    } catch (err) {
        console.log(err)
      res.status(500).json({ message: 'Error uploading image', error: err });
    }
  });

  router.get("/",async(req,res)=>{
    try {
      const data = await Imagemodel.find()
      res.status(200).send(data)
    } catch (error) {
      res.status(404).send({ message: 'something went wrong', error: err });
    }
    

  })

  module.exports = {router};