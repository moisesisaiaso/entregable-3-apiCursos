const userServices = require("../services/user.services");

//* Obtener un usuario por su id
const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await userServices.getById(id);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
};

const getUserWithCourse = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await userServices.getWithCourse(id);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
};

const createUser = async (req, res) => {
    try {
        const newUser = req.body;
        const result = await userServices.create(newUser);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
};

const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { firstName, password } = req.body;
        const editedUser = {
            firstName,
            password,
        };
        const result = await userServices.update(id, editedUser);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
};

module.exports = {
    getUserById,
    getUserWithCourse,
    createUser,
    updateUser,
};
