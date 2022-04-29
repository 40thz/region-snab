const buildAdminRouter = require("./admin");
const vacancyRouter = require("./vacancy");
const mailRouter = require("./mail");
//mail
module.exports = {
  buildAdminRouter,
  vacancyRouter,
  mailRouter,
};
