const StudentService = require("../../lib/services/StudentPartherService");
const StudentPartherController = require("../../lib/controllers/StudentPartherController");

describe("Test para StudentPartherController ", () =>{ 
    test("Requerimiento 1: Lista de estudiantes", () => {
        const students = StudentPartherController.filterStudents();
        expect(students.length > 0).toBe(true);
    });

    test("Requerimiento 2: Lista de estudiantes con certificacion  ", () => {
        const students = StudentPartherController.filterStudents();
        const totalStuedents = StudentService.getStudentsCertification(students);
        expect(totalStuedents.map((student) => student.haveCertification === true ).length > 0).toBe(true);
    });

    test("Requerimiento 2: Lista de estudiantes con mayor credito de 500", () => {
        const students = StudentPartherController.filterStudents();
        const studentsCredits = StudentPartherController.getCreditStudents(students);
        expect(studentsCredits[0].credits).toBe(508);
    });

    
});