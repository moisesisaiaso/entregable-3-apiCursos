const { Router } = require("express");
const {
    getCourses,
    getCoursesWithCategoriesAndVideos,
    createCourse,
    updateCourse,
} = require("../controllers/courses.controllers");

const router = Router();

router.get("/courses", getCourses);
router.get("/courses/categories-videos", getCoursesWithCategoriesAndVideos);
router.post("/courses", createCourse);
router.put("/courses/:id", updateCourse);

module.exports = router;
