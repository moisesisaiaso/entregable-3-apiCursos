const { Sequelize } = require("sequelize");

const db = new Sequelize({
    database: "cursos",
    username: "postgres",
    host: "localhost",
    port: 5432,
    password: "07101165",
    dialect: "postgres",
    logging: false,
});

module.exports = db;
