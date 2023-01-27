const categoryServices = require("../services/category.services");

const createCategory = async (req, res) => {
    try {
        const newCategory = req.body;
        const result = await categoryServices.create(newCategory);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
};

const deleteCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await categoryServices.delete(id);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
};
module.exports = {
    createCategory,
    deleteCategory,
};
