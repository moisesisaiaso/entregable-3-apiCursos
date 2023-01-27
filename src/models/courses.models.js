const db = require("../utils/database");

const { DataTypes } = require("sequelize");

const Course = db.define("Course", {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
    },

    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    instructor: {
        type: DataTypes.STRING,
        allowNull: true,
    },
});

module.exports = Course;
