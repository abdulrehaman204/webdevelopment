import Student, {
    addStudent,
    removeStudent,
    getStudents
} from "./student.js";

const s1 = new Student("Abdul",101)
const s2 = new Student("Ravi",102)

s1.display()
s2.display()

addStudent("Abdul")
addStudent("Ravi")
addStudent("Prasad")
console.log(getStudents())


removeStudent("Prasad")
console.log(getStudents())


