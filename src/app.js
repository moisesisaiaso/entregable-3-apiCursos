const express = require("express");
const initModels = require("./models/init.models");
const db = require("./utils/database");

const app = express();

const userRoutes = require("./routes/users.routes");
const userCourseRoutes = require("./routes/usersCourses.routes");
const courseRoutes = require("./routes/courses.routes");
const videoRoutes = require("./routes/videos.routes");
const categoryRoutes = require("./routes/categories.routes");

app.use(express.json());

//^ Probando la conexion a la base de datos
db.authenticate()
    .then(() => console.log("Authenticated database"))
    .catch((error) => console.log(error));

initModels();

db.sync({ force: false })
    .then(() => console.log("Base de datos Sincronizada"))
    .catch((error) => console.log(error));

//? RUTAS
app.use("/api/v1", userRoutes); // usuarios
app.use("/api/v1", userCourseRoutes); // pivote user-course
app.use("/api/v1", courseRoutes); // cursos
app.use("/api/v1", videoRoutes); // videos
app.use("/api/v1", categoryRoutes); //categories

const PORT = 5500;

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});
