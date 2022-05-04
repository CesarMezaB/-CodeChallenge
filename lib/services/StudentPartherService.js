class StudentPartherService{

    static filterStudents(students){
        const totalStudents= students.filter((explorer) => explorer);
        return totalStudents;
    }
    static getStudentsCertification(students){
        const studentsCerfication = StudentPartherService.filterStudents(students);
        const studentsApproved = studentsCerfication.map((student) => student.haveCertification === true );
        return studentsApproved;
    }

    static getHighCreditStudents(students){
        return students.filter((student) => student.credits > 500);
    }
        

}

module.exports = StudentPartherService;
