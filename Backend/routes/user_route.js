const express = require('express')
const { Usermodel } = require('../models/user.model')

const user= express.Router()

user.post('/register',async(req,res)=>{
    try {
        let data = await Usermodel.create(req.body)
        res.status(200).send({ "msg": "data succesully added", "data": data })
    } catch (error) {
        res.status(408).send(error)
        
    }
})

user.post("/login",async(req,res)=>{
    try {
        let data = await Usermodel.findOne({ email, password })
        if (data) {
            // const token = jwt.sign({email},process.env.SECRETE_KEY);
            res.status(200).send({ "msg": "succesfully login", data})
        }
        else {
            res.status(404).send("wrong credentail")
        }
    } catch (error) {
        res.status(408).send(error)
        
    }
})
