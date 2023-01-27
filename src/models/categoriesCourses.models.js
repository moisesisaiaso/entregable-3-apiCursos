const db = require("../utils/database");

const { DataTypes } = require("sequelize");
const Course = require("./courses.models");
const Category = require("./categories.models");

const CategoriCourse = db.define("Categori_course", {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
    },

    courseId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "course_id",
        references: {
            model: Course,
            key: "id",
        },
    },

    categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "category_id",
        references: {
            model: Category,
            key: "id",
        },
    },
});

module.exports = CategoriCourse;
