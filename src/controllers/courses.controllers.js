const courseServices = require("../services/course.services");

const getCourses = async (req, res) => {
    try {
        const result = await courseServices.getAll();
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
};

const getCoursesWithCategoriesAndVideos = async (req, res) => {
    try {
        const result = await courseServices.getAllWithCategoriesAndVideos();
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
};

const createCourse = async (req, res) => {
    try {
        const newCourse = req.body;
        const result = await courseServices.create(newCourse);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
};

const updateCourse = async (req, res) => {
    try {
        const { id } = req.params;
        const { description } = req.body;
        const editedCourse = {
            description,
        };
        const result = await courseServices.update(id, editedCourse);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
};

module.exports = {
    getCourses,
    getCoursesWithCategoriesAndVideos,
    createCourse,
    updateCourse,
};
