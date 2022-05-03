class StudentPartherService{

    static filterStudents(students){
        const totalStudents= students.filter((explorer) => explorer);
        return totalStudents;
    }
    static getStudentsCertication(studens){
        const studentsCerfication = StudentPartherService.filterStudents(studens);
        const studentsApproved = studentsCerfication.map((studen) => studen.haveCertification === true );
        return studentsApproved;
    }
}

module.exports = StudentPartherService;