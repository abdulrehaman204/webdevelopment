const students = []

// Named Export
export function addStudent(name) {
    students.push(name);
}

// Named Export
export function removeStudent(name){
    const index = students.indexOf(name)
    if(index !== -1){
        students.splice(index,1)
    }
}

// Named Export
export function getStudents() {
    return students;
}

// Default Export
export default class Student {
    constructor(name, rollNo) {
        this.name = name;
        this.rollNo = rollNo;
    }

    display() {
        console.log(`Name: ${this.name}`);
        console.log(`Roll No: ${this.rollNo}`);
    }
}

