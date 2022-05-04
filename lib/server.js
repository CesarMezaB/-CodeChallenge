const StudentPartherController = require("./controllers/StudentPartherController");
const express = require("express");
const { request } = require("express");
const { response } = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "Sudents Parther!"});
});

app.get("/v1/studentsPaether",(request,response) => {
    const students = StudentPartherController.filterStudents();
    response.json(students);
});

app.get("/v1/studentsCertificationsEmail",(request,response) => {
    const students = StudentPartherController.getStudentsCertification();
    response.json(students);
});

app.get("/v1/studentsCredits",(request,response) => {
    const students = StudentPartherController.getCreditStudents();
    response.json(students);
});

app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});