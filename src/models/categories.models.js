const db = require("../utils/database");

const { DataTypes } = require("sequelize");

const Category = db.define("Category", {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = Category;
