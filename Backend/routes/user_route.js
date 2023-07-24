const express = require('express')
const { Usermodel } = require('../models/user.model')
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
require('dotenv').config()

const User_route= express.Router()


User_route.get('/',(req,res)=>{
    res.send("user page")
})

User_route.post('/register',async(req,res)=>{
    console.log(req.body)
    try {
        let check = await Usermodel.findOne({email:req.body.email})
        if(check){
            res.status(201).send({ "msg": "already registered", })

        }
        else{
            let data = await Usermodel.create(req.body)
        res.status(200).send({ "msg": "data succesully added", "data": data })

        }
        
    } catch (error) {
        res.status(408).send(error)
        
    }
})

User_route.post("/login",async(req,res)=>{
    let{email,password} = req.body
    try {
        let data = await Usermodel.findOne({ email, password })
        console.log("yha aya ree")
        if (data) {
            const token = jwt.sign({email},"dattebayo");
            res.status(200).send({ "msg": "succesfully login","user":data, token})
        }
        else {
            res.status(404).send("wrong credentail")
        }
    } catch (error) {
        res.status(408).send(error)
        
    }
})
module.exports={User_route}
