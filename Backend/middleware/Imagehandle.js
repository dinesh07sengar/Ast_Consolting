const multer = require('multer');

// Define the storage for uploaded files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log("multer me aya")
    cb(null, './public/upload'); 
  },
  filename: (req, file, cb) => {

    const uniquePrefix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniquePrefix + '-' + file.originalname);
  },
});


const upload = multer({ storage });

module.exports = {upload};