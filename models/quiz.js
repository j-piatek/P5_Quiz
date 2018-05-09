/**
// Model
const quizzes = [
    {   id: 1, question: "Capital de Italia", answer: "Roma"},
    {   id: 2, question: "Capital de Francia", answer: "Paris"},
    {   id: 3, question: "Capital de España", answer: "Madrid"},
    {   id: 4, question: "Capital de Portugal", answer: "Lisboa"}];


// Next value for id
let nextId = quizzes.length + 1;

// Creates a new quiz with the values passed into the quiz parameter.
exports.create = quiz => {

    const newQuiz = {
        id: nextId++,
        question: (quiz.question || "").trim(),
        answer: (quiz.answer || "").trim()
    };

    quizzes.push(newQuiz);

    return newQuiz;
};

// Updates the given quiz (passed into the parameter).
exports.update = (quiz) => {

    const index = quizzes.findIndex(q => quiz.id === q.id);

    if (index >= 0) {
        quizzes[index] = {
            id: quiz.id,
            question: (quiz.question || "").trim(),
            answer: (quiz.answer || "").trim()
        };
    }
};

// Returns all the quizzes.
exports.findAll = () => quizzes;

// Find a quiz by its id.
exports.findById = (id) => {

    return quizzes.find(quiz => quiz.id === id);
};

// Remove the given quiz.
exports.destroy = (quiz) => {

    const index = quizzes.findIndex(q => quiz.id === q.id);

    if (index >= 0) {
        quizzes.splice(index,1);
    }
};
*/



module.exports = function (sequelize, DataTypes) {
    return sequelize.define('quiz',
        {
            question: {
                type: DataTypes.STRING,
                validate: {notEmpty: {msg: "Question must not be empty"}}
            },
            answer: {
                type: DataTypes.STRING,
                validate: {notEmpty: {msg: "Answer must not be empty"}}
            }
        });
};