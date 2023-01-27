const { Router } = require("express");
const {
    getUserById,
    getUserWithCourse,
    createUser,
    updateUser,
} = require("../controllers/users.controllers");

const router = Router();

// app.get
// app.post
// app.put
// app.delete

router.get("/users/:id", getUserById);
router.get("/users/:id/courses", getUserWithCourse);
router.post("/users", createUser);
router.put("/users/:id", updateUser);

module.exports = router;
