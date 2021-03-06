const { model, Schema } = require("mongoose");

const VacancySchema = new Schema({
  uploadedFile: {
    type: JSON,
  },
  name: { type: String },
  sliderDescription: { type: String },
  description: { type: String },
  conditions: [{ type: String }],
});

module.exports = model("Vacancy", VacancySchema);
