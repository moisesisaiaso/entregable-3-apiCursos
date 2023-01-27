const Category = require("../models/categories.models");
const CategoriCourse = require("../models/categoriesCourses.models");
const Course = require("../models/courses.models");
const User = require("../models/users.models");
const UserCourse = require("../models/usersCourses.models");
const Video = require("../models/videos.models");
const db = require("../utils/database");

const users = [
    { firstName: "Moises", lastName: "Ortíz", password: "123456", email: "moises@gmail.com" },
    { firstName: "Maricela", lastName: "Ante", password: "1234567", email: "maricela@gmail.com" },
    { firstName: "Madie", lastName: "Ortíz", password: "1234568", email: "madie@gmail.com" },
    { firstName: "Marcos", lastName: "Ortíz", password: "1234569", email: "marcos@gmail.com" },
];

const courses = [
    {
        title: "CSS",
        description: "Aprende CSS en tiempo record",
        instructor: "Moises isaias O",
    },
    {
        title: "JS",
        description: "Aprende JS en tiempo record",
        instructor: "Moises isaias",
    },
    {
        title: "HTML",
        description: "Aprende HTML en tiempo record",
        instructor: "Carlos",
    },
    {
        title: "Nodejs",
        description: "Aprende Nodejs en tiempo record",
        instructor: "Victor Robles",
    },
];

const usersCourses = [
    {
        userId: 1,
        courseId: 2,
    },
    {
        userId: 1,
        courseId: 2,
    },
    {
        userId: 2,
        courseId: 3,
    },
    {
        userId: 3,
        courseId: 4,
    },
];

const categories = [
    {
        name: "Programación",
    },
    {
        name: "Maquetado",
    },
    {
        name: "Frontend",
    },
    {
        name: "Backend",
    },
    {
        name: "Full-stack",
    },
];

const categoriesCourses = [
    {
        courseId: 1,
        categoryId: 2,
    },
    {
        courseId: 2,
        categoryId: 1,
    },
    {
        courseId: 2,
        categoryId: 3,
    },
    {
        courseId: 3,
        categoryId: 2,
    },
    {
        courseId: 4,
        categoryId: 4,
    },
];

const videos = [
    {
        title: "Primeros pasos en CSS",
        url: "https://imnovacionCrucial/courses/masterCSS",
        courseId: 1,
    },
    {
        title: "Hola mundo en  JS",
        url: "https://imnovacionCrucial/courses/masterJS",
        courseId: 2,
    },
    {
        title: "Estructura básica de HTML",
        url: "https://imnovacionCrucial/courses/masterHTML",
        courseId: 3,
    },
    {
        title: "Primeros pasos con NodeJs",
        url: "https://imnovacionCrucial/courses/masterNodejs",
        courseId: 4,
    },
];

//? Generando los datos en la db

db.sync({ force: true })
    .then(() => {
        console.log("Iniciando con el sembrío");
        users.forEach((user) => User.create(user));
        courses.forEach((course) => Course.create(course));

        setTimeout(() => {
            usersCourses.forEach((userCour) => UserCourse.create(userCour));
        }, 300);

        categories.forEach((category) => Category.create(category));

        setTimeout(() => {
            categoriesCourses.forEach((categoryCour) => CategoriCourse.create(categoryCour));
            videos.forEach((video) => Video.create(video));
        }, 400);
    })
    .catch((error) => console.log(error));
