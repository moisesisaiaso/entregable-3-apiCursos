const { Router } = require("express");
const { addCurseToUser } = require("../controllers/userCourse.controller");

const router = Router();
// app.get
// app.post
// app.put
// app.delete

router.post("/usersCourses", addCurseToUser);

module.exports = router;
