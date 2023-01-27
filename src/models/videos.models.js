const db = require("../utils/database");

const { DataTypes } = require("sequelize");
const Course = require("./courses.models");

const Video = db.define("Video", {
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

    url: {
        type: DataTypes.STRING,
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
});

module.exports = Video;
