const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    // place where we store the images
    destination:  (req, file, cb) => {
      cb(null, "../Images");
    },
    // Define the file name with current date & time
    filename:  (req, file, cb) => {
      const uniqueSuffix = Date.now() + path.extname(file.originalname);
      cb(null, uniqueSuffix);
    },
  });
  
  const upload = multer({ storage: storage });

  module.exports = upload;
  