const { Router } = require("express");
const VacancyController = require("../controllers/Vacancy");
const router = new Router();

router.get("/", VacancyController.getVacancy);
router.get("/:id", VacancyController.getVacancyById);
module.exports = router;
