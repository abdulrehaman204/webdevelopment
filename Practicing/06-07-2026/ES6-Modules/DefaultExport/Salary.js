import Employee from "./Employee.js";

const emp1 = new Employee(101, "Abdul", 50000);
const emp2 = new Employee(102, "Rehaman", 60000);
const emp3 = new Employee(103, "Raju", 70000);

emp1.increment(10);
emp2.increment(10);
emp3.increment(10);

emp1.display();
emp2.display();
emp3.display();