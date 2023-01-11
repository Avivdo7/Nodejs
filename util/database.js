const Sequelize = require("sequelize").Sequelize;


const sequelize = new Sequelize("marketplace", "root", "6759979", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;