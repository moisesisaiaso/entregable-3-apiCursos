const Category = require("../models/categories.models");
const CategoriCourse = require("../models/categoriesCourses.models");
const Course = require("../models/courses.models");
const Video = require("../models/videos.models");

class courseServices {
    static async getAll() {
        try {
            const result = await Course.findAll();
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async getAllWithCategoriesAndVideos() {
        try {
            const result = await Course.findAll({
                include: [
                    {
                        model: CategoriCourse,
                        as: "category",
                        attributes: ["id"],
                        include: {
                            model: Category,
                            as: "category",
                            attributes: ["name"],
                        },
                    },
                    {
                        model: Video,
                        as: "video",
                        attributes: ["title", "url"],
                    },
                ],
            });
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async create(course) {
        try {
            const result = await Course.create(course);
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async update(id, editedCourse) {
        try {
            const result = await Course.update(editedCourse, {
                where: { id },
            });
            return result;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = courseServices;
