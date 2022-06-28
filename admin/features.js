const uploadFeature = require("@adminjs/upload");
const path = require("path");
const MyLocalProvider = require("./customProvider");
require("dotenv").config();

const features = [
  uploadFeature({
    provider: new MyLocalProvider(path.join(__dirname, "../uploads")),
    properties: {
      filePath: "uploadedFile.filePath",
      filename: "uploadedFile.filename",
      file: "uploadedFile",
      filesToDelete: "uploadedFile.filesToDelete",
      key: "uploadedFile.path",
      bucket: "uploadedFile.folder",
      size: "uploadedFile.size",
      mimeType: "uploadedFile.mime",
    },

    uploadPath: (record, filename) => `${record.id()}/images/${filename}`,
  }),
];

module.exports = features;
