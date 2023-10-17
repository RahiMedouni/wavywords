// const multer = require("multer");

// const imageStorage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads/images");
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + "-" + file.originalname);
//   },
// });

// const pdfStorage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads/pdfs");
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + "-" + file.originalname);
//   },
// });

// const fileFilter = (req, file, cb) => {
//   if (file.mimetype === "application/pdf") {
//     cb(null, true);
//   } else {
//     cb(null, false);
//   }
// };

// const uploadImage = multer({ storage: imageStorage });
// const uploadPDF = multer({ storage: pdfStorage, fileFilter: fileFilter });

// module.exports = { uploadImage, uploadPDF };
