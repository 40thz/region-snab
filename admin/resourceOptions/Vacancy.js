const AdminJS = require("adminjs");
const VacancyModel = require("../../models/Vacancy");
const features = require("../features");

/** @type {AdminJS.ResourceOptions} */
const options = {
  listProperties: ["uploadedFile", "name", "description", "conditions", "date"],
  editProperties: ["uploadedFile", "name", "description", "conditions", "date"],
  navigation: {
    icon: "UserCertification",
  },
  properties: {
    mimeType: { isVisible: false },
    description: {
      type: "richtext",
    },
  },
};

module.exports = {
  resource: VacancyModel,
  options,
  features,
};
