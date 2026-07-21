// conditional statements
// if 
var a = 15;
if(a %2 == 0){
    console.log("even")
}
if(a %2 !== 0){
    console.log("odd")
}

// if else
var age=20;
if(age>=18){
    console.log("eligible for vote")
}
else{
    console.log("Not eligible")
}

// else-if
var a=0;
if(a>0){
    console.log("Positive")
}
else if(a<0){
    console.log("Negative")
}
else{
    console.log("Zero")
}

// switch
function points(marks) {
  switch (true) {
    case marks > 90 && marks <= 100:
      return "Grade A";
    case marks > 80:
      return "Grade B";
    case marks > 70:
      return "Grade C";
    case marks > 60:
      return "Grade D";
    case marks > 50:
      return "Grade E";
    default:
      return "Fail";
  }
}

console.log(points(85)); 

// ternary
var age = 25;
var result = (age>=18) ? "You are eligible for vote" : "You are not eligible for vote"
console.log(result)

// nested else if
const weather="rainy"
const temp = 30
if(weather==="sunny"){
    if(temp>=30){
        console.log("Its to hot")
    }else if(temp>=25){
        console.log("Its warm day")
    }else{
        console.log("It's a bit cool today.")
    }
}
else if(weather=="rainy"){
console.log("Don't forget your umbrella!");
} else {
    console.log("Check the weather forecast!");
}


// // logical coding tasks using with condtional statements

// Write a program to check whether a number is positive, negative, or zero
const num = -10
if(num>0){
    console.log("Positive number")
}else if(num<0){
    console.log("Negative number")
}else{
    console.log("Zero")
}


// Electricity Bill Calculator
function calculateBill(units) {
    let bill = 0;

    if (units <= 100) {
        bill = units * 5;
    } else if (units <= 200) {
        bill = 100 * 5 + (units - 100) * 7;
    } else {
        bill = 100 * 5 + 100 * 7 + (units - 200) * 10;
    }
    if (bill > 1000) {
        bill += 100;
    }

    return bill;
}

console.log(calculateBill(250));

// Student Grade with Scholarship Eligibility
function evaluateStudent(marks, attendance) {
    let grade;
    let scholarship = false;

    if (marks >= 90) {
        grade = "A";
        if (attendance >= 90) {
            scholarship = true;
        }
    } else if (marks >= 80) {
        grade = "B";
        if (attendance >= 95) {
            scholarship = true;
        }
    } else if (marks >= 70) {
        grade = "C";
    } else {
        grade = "Fail";
    }

    return { grade, scholarship };
}

console.log(evaluateStudent(88, 96));


// Loan Eligibility Checker
function loanEligible(age, salary, creditScore) {
    if (age < 21 || age > 60) {
        return "Rejected: Age criteria failed";
    }
    if (salary >= 100000) {
        return "Approved";
    }
    if (salary >= 30000 && creditScore >= 700) {
        return "Approved";
    }
    return "Rejected";
}

console.log(loanEligible(30, 120000, 500));



