const multer = require("multer");

const imageStorage = multer.diskStorage({
  destination: "uploads/images",
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const pdfStorage = multer.diskStorage({
  destination: "uploads/pdfs",
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const uploadImage = multer({ storage: imageStorage });
const uploadPDF = multer({ storage: pdfStorage });

module.exports = { uploadImage, uploadPDF };
