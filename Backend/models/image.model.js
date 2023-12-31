const express = require('express')
const mongoose = require('mongoose')


const imageSchema = mongoose.Schema({
    // logo: { type: Buffer, required: true },
    user:{ type: String, },
    imageType: { type: String, required: true },
    imageUrl: { type: String, require: true},
    comments: {type:Array},
    name:{ type: String },
    caption:{ type: String, },
    likes: { type: Number, default: 0 },
    album:{type:Array}

}, {
    timestamps: true
})

const Imagemodel = mongoose.model("gallery", imageSchema, "gallerys");
module.exports = { Imagemodel }