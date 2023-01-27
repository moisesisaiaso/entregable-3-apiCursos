const Category = require("./categories.models");
const CategoriCourse = require("./categoriesCourses.models");
const Course = require("./courses.models");
const User = require("./users.models");
const UserCourse = require("./usersCourses.models");
const Video = require("./videos.models");

const initModels = () => {
    //^ RELACIONES ENTRE ENTIDADES
    //? hasOne -> para indicar que tiene una
    //? hasMany -> tiene muchos
    //?  belongsTo -> pertence a

    //* relación de M-M  USERS Y CURSOS
    UserCourse.belongsTo(User, { as: "user", foreignKey: "user_id" });
    User.hasMany(UserCourse, { as: "courses", foreignKey: "user_id" });

    UserCourse.belongsTo(Course, { as: "course", foreignKey: "course_id" });
    Course.hasMany(UserCourse, { as: "user", foreignKey: "course_id" });

    //* relación de M-M  CORSOS Y CATEGORIAS
    CategoriCourse.belongsTo(Course, { as: "course", foreignKey: "course_id" });
    Course.hasMany(CategoriCourse, { as: "category", foreignKey: "course_id" });

    CategoriCourse.belongsTo(Category, { as: "category", foreignKey: "category_id" });
    Category.hasMany(CategoriCourse, { as: "course", foreignKey: "category_id" });

    //* relación de N-M CURSOS Y VIDEOS
    Video.belongsTo(Course, { as: "course", foreignKey: "course_id" });
    Course.hasMany(Video, { as: "video", foreignKey: "course_id" });
};

module.exports = initModels;
