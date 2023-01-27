const UserCourse = require("../models/usersCourses.models");

class userCourseServices {
    static async addCurse(course) {
        try {
            const result = await UserCourse.create(course);
            return result;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = userCourseServices;
