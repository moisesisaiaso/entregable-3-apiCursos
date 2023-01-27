const db = require("../utils/database");
const { DataTypes } = require("sequelize");
const User = require("./users.models");
const Course = require("./courses.models");

const UserCourse = db.define("User_course", {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
    },

    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "user_id",
        references: {
            model: User,
            key: "id",
        },
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

module.exports = UserCourse;
