const StudentPartherController = require("../../lib/controllers/StudentPartherController");

describe("Test para StudentPartherController ", () =>{ 
    test("Requerimiento 1: Lista de estudiantes", () => {
        const students = StudentPartherController.filterStudents();
        expect(students.length > 0).toBe(true);
    });

    
    
});