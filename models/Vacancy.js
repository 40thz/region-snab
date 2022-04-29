const { model, Schema } = require("mongoose");

const VacancySchema = new Schema({
  uploadedFile: { type: String },
  name: { type: String, required: true },
  sliderDescription: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  conditions: [{ type: String }],
});

module.exports = model("Vacancy", VacancySchema);
