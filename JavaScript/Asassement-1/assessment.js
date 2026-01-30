// palindrome 
function isPalindrome(str) {
    const reversed = str.split("").reverse().join("");
    return str === reversed;
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("Hello"))


// count vowels
let count=0;
function vowels(str){
    for(i=0;i<str.length;i++){
        if(str[i]=='a' || str[i]=='e' || str[i]=="i" || str[i]=="o" || str[i]=="u"){
            count++;
        }
    }
    console.log(count)
}
vowels("JavaScript")
vowels("HELLO")


//Smart type converter
// convert string to number
var str="123"
var a=true
console.log(typeof(str))
console.log(typeof(a))

console.log(parseInt(str))
console.log()



// logical expression 
function one(a,b,c){
if(a+b>c){
    if(b-c<a){
    return true;
}
}
else {
    return false;
}
}

console.log(one(30,20,5))

//maxof three
function maxOfThree(a, b, c) {
  return (a > b)
    ? (a > c ? a : c)
    : (b > c ? b : c);
}

console.log(maxOfThree(5, 10, 8)); 


// final grade
function grade(score, attendance) {
  if (score > 90 && attendance > 75) {
    return "A+";
  } else if (score > 75 && attendance > 60) {
    return "B";
  } else {
    return "C";
  }
}

console.log(grade(92,80))


// season 
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



// recursive 
function factorial(n) {
  if (n === 0) return 1;     
  return n * factorial(n - 1); 
}

console.log(factorial(5));


// hello world
function Hello(str) {
  return str
    .split(' ').map(word => word.toUpperCase()).join('-');               
}

const result = Hello("Hello World");
console.log(result);


// currying function
function sum(a) {
  return function(b) {
    return a + b;
  };
}

console.log(sum(5)(10));


// remove duplicate in array
let numbers = [1, 2, 2, 3, 4, 4, 5];
let num = [...new Set(numbers)];
console.log(num); 

// sort descending array 
function sortDescending(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}


let num1 = [5, 12, 3, 20, 15];
console.log(sortDescending(num1)); 




