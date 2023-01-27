const Course = require("../models/courses.models");
const User = require("../models/users.models");
const UserCourse = require("../models/usersCourses.models");

class userServices {
    static async getById(id) {
        try {
            const result = await User.findOne({
                where: { id },
                attributes: ["first_name", "last_name", "email"],
            });
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async getWithCourse(id) {
        try {
            const result = await User.findOne({
                where: { id },
                attributes: ["first_name", "last_name", "email"],
                include: {
                    model: UserCourse,
                    as: "courses",
                    attributes: ["id"],
                    include: {
                        model: Course,
                        as: "course",
                        attributes: ["title"],
                    },
                },
            });

            return result;
        } catch (error) {
            throw error;
        }
    }

    static async create(user) {
        try {
            const result = await User.create(user);
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async update(id, editedUser) {
        try {
            const result = await User.update(editedUser, {
                where: { id },
            });
            return result;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = userServices;
