const VacancyModel = require("../models/Vacancy");

class ProductController {
  getVacancy = async (req, res) => {
    try {
      const vacancy = await VacancyModel.find();
      const filterByImg = await vacancy.map((item) =>
        item.uploadedFile === "Водитель"
          ? {
              ...item._doc,
              uploadedFile: "voditel.jpg",
            }
          : {
              ...item._doc,
              uploadedFile: "manager.jpg",
            }
      );
      res.status(200).json(filterByImg);
    } catch (error) {
      res.status(500);
      throw new Error(error.message);
    }
  };

  getVacancyById = async (req, res) => {
    try {
      const vacancy = await VacancyModel.findOne({ _id: req.params.id });

      if (vacancy.uploadedFile === "Водитель") {
        vacancy.uploadedFile = "voditel.jpg";
      } else {
        vacancy.uploadedFile = "manager.jpg";
      }
      res.status(200).json(vacancy);
    } catch (error) {
      res.status(500);
      throw new Error(error.message);
    }
  };
}

module.exports = new ProductController();
