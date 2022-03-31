const VacancyModel = require("../models/Vacancy");

class ProductController {
  getVacancy = async (req, res) => {
    try {
      const vacancy = await VacancyModel.find();
      res.status(200).json(vacancy);
    } catch (error) {
      res.status(500);
      throw new Error(error.message);
    }
  };

  getVacancyById = async (req, res) => {
    try {
      const vacancy = await VacancyModel.findOne({ _id: req.params.id });
      res.status(200).json(vacancy);
    } catch (error) {
      res.status(500);
      throw new Error(error.message);
    }
  };
}

module.exports = new ProductController();
