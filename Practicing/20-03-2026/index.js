// Vowel Counter

function countVowels(str) {
  let count = 0;
  const vowels = "aeiouAEIOU";

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("JavaScript")); 
console.log(countVowels("HELLO"));      

// Smart Type Converter

function smartConvert(value) {
let originaltype = typeof value;
let convertedtype = value;
if(originaltype=="string" && !isNaN(value)){
    convertedtype=Number(value)
}
else if(originaltype=="boolean"){
    convertedtype=value.toString()
}
let convertedvalue= typeof convertedtype;
return `original : ${originaltype}, convereted :${convertedvalue}`
}

console.log(smartConvert("123"));
console.log(smartConvert(true)); 

// Logical Expression Evaluator

function evaluateExpression(a, b, c){
    if ((a + b) > c) {
       if((b - c) < a){
           return true;
       }
       else {
        return false;
       }
    }
}

console.log(evaluateExpression(30,20,5))

// Maximum of Three Numbers

function maxOfThree(a, b, c){
return (a > b) ? ( a > c ? a : c ) : ( b > c ? b : c)
}

console.log(maxOfThree(5, 10, 8)); 

// Grading System

function finalGrade(score, attendance) {
if (score > 90 && attendance > 75) {
    return "A+";
} else if (score > 75 && attendance > 60) {
    return "B";
} else {
    return "C";
}
}

console.log(finalGrade(92, 80));

// Season Finder

function season(month) {
  switch (month) {
    case "december":
    case "january":
    case "february":
      return "Winter";

    case "march":
    case "april":
    case "may":
      return "Spring";

    case "june":
    case "july":
    case "august":
      return "Summer";

    case "september":
    case "october":
    case "november":
      return "Autumn";

    default:
      return "Invalid month";
  }
}

console.log(season("january"))

// Random Number Loop

let num;

do {
    num = Math.floor(Math.random() * 10) + 1;
    console.log(num);
} while (num !== 7);


// Object Iteration

const students = { Alice: 85, Bob: 92, Carol: 78 };

for (let name in students) {
    console.log(name + ": " + students[name]);
}

for (let score of Object.values(students)) {
    console.log(score);
}

