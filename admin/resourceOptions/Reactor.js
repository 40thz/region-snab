const AdminJS = require("adminjs");
const ReactorModel = require("../../models/Reactor");
const features = require("../features");

/** @type {AdminJS.ResourceOptions} */
const options = {
  listProperties: ["uploadedFile", "name", "post", "text"],
  editProperties: ["uploadedFile", "name", "post", "text"],
  navigation: {
    icon: "UserCertification",
  },
  properties: {
    mimeType: { isVisible: false },
    text: {
      type: "richtext",
    },
  },
};

module.exports = {
  resource: ReactorModel,
  options,
  features,
};
