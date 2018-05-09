const quiz = require("./quiz");
exports.quiz = quiz;

const path = require('path');

//Load ORM
const Sequelize = require('sequelize');

//To use SQLite data base
const sequelize = new Sequelize("sqlite:quizzes.sqlite");

//Import the definition of the Quiz Table from quiz.js
sequelize.import(path.join(__dirname,'quiz'));

//Create tables
sequelize.sync()
    .then(() => console.log('Data Bases created succesfully'))
    .catch(error => {
        console.log("Error creating the data base tables:", error);
        process.exit(1);
    });
module.exports = sequelize;