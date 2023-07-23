const express = require('express');
const { Imagemodel } = require('../models/image.model');
const { validation } = require("../middleware/validation")

const album_router = express.Router();
album_router.use(validation)

album_router.post("/:id", async (req, res) => {
    id = req.params.id

    try {
        let data = await Imagemodel.find({ id })
        data.album.push(req.body.user)
        await data.save();
        res.status(200).send({ "msg": "succesfully added" })

    } catch (error) {
        res.status(404).send(error)

    }
})

album_router.post("/comment/:id", async (req, res) => {
    id = req.params.id

    try {
        let data = await Imagemodel.find({ id })
        data.comments.push({ user: req.body.user, cmnt: req.body.cmnt })
        await data.save();
        res.status(200).send({ "msg": "succesfully added" })

    } catch (error) {
        res.status(404).send(error)

    }
})
album_router.get("/", async (req, res) => {

    try {
        let data = await Imagemodel.find({ id })
        let arr = []


        data.map((ele, i) => {
            if (ele.album.includes(req.body.user)) {
                arr.push(ele)

            }
        })
        const newArrayWithoutKey = arr.map((obj) => {
            const { album, ...rest } = obj;
            return rest;
        });



        res.status(200).send({ "msg": "succesfully added", "data": newArrayWithoutKey })

    } catch (error) {
        res.status(404).send(error)

    }
})
module.exports={album_router}