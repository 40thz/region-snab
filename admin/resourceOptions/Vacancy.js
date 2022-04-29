const AdminJS = require("adminjs");
const VacancyModel = require("../../models/Vacancy");
const features = require("../features");

/** @type {AdminJS.ResourceOptions} */
const options = {
  listProperties: [
    "uploadedFile",
    "name",
    "sliderDescription",
    "description",
    "conditions",
    "date",
  ],
  editProperties: [
    "uploadedFile",
    "name",
    "sliderDescription",
    "description",
    "conditions",
    "date",
  ],
  navigation: {
    icon: "UserCertification",
  },
  properties: {
    mimeType: { isVisible: false },
    description: {
      type: "richtext",
    },
    sliderDescription: {
      type: "richtext",
    },
    uploadedFile: {},
  },
};

module.exports = {
  resource: VacancyModel,
  options,
  // features,
};
