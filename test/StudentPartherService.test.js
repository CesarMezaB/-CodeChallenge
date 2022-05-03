const StudentPartherService = require("../lib/services/StudentPartherService")

describe("Test para StudentPartherService", () =>{

    test("Requerimiento 1: Regresar todos los estudiantes", () =>{
        const studens = [
            {
              "id": "6264d5d89f1df827eb84bb23",
              "name": "Warren",
              "email": "Todd@visualpartnership.xyz",
              "credits": 508,
              "enrollments": [
                "Visual Thinking Intermedio",
                "Visual Thinking Avanzado"
              ],
              "previousCourses": 1,
              "haveCertification": true
            }]
        const totalStudents = StudentPartherService.filterStudents(studens);
        expect(totalStudents.length).toBe(1)
    })
})