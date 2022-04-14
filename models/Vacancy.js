const { model, Schema } = require("mongoose");

const VacancySchema = new Schema({
  uploadedFile: JSON,
  name: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  conditions: [{ type: String }],
});

module.exports = model("Vacancy", VacancySchema);
