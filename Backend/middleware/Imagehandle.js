const multer = require('multer');

// Define the storage for uploaded files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log("multer me aya")
    cb(null, './public/upload'); // The folder where uploaded files will be stored
  },
  filename: (req, file, cb) => {
    // Generate a unique file name based on the current timestamp and original file name
    const uniquePrefix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniquePrefix + '-' + file.originalname);
  },
});

// Create the multer instance with the specified storage configuration
const upload = multer({ storage });

module.exports = {upload};