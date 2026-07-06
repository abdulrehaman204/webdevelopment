export default class Employee {
        constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    annualsalary(){
        return this.salary*12;
    }
    
    increment(percent){
       this.salary += this.salary * (percent / 100);
    }

    display(){
        console.log(`
ID : ${this.id}
Name : ${this.name}
Salary : ${this.salary}
Annual Salary : ${this.annualsalary()}
        `);
    }
}