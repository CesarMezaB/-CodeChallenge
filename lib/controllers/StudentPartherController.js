const Reader = require("./../utils/Reader");
const StudentPartherService = require("./../services/StudentPartherService");

class StudentPartherController{

    static filterStudents(){
        const students = Reader.readJsonFile("./visualpartners.json");
        const totalStudents = StudentPartherService.filterStudents(students);
        return totalStudents; 
    }

}


module.exports = StudentPartherController;