const userCourseServices = require("../services/userCourse.services");

const addCurseToUser = async (req, res) => {
    try {
        const userCourse = req.body;
        const result = await userCourseServices.addCurse(userCourse);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
};

module.exports = {
    addCurseToUser,
};
