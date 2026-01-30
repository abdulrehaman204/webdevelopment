// greater (a,b)
let a=10;
let b=20;
if(a>b){
    console.log("a is greater")
}
else {
    console.log("b is greater")
}


// divisible by 3 and 5
function divisible (a){
    if(a%3==0 && a%5==0){
        return "it is divisible"
    }
    else {
        console.log("it is not divisible")
    }
}

console.log(divisible(30))


// mutiplecation table
function multiple(n){
    for(let i=0;i<=10;i++){
        console.log(n +"x" + i + "=" + n*i)
    }
}

multiple(12)


// recursive function (calling its self)

function factorial(n) {
  if (n === 0) return 1;     // base case
  return n * factorial(n - 1); // recursive case
}

console.log(factorial(5)); // 120


// Array sum 
var arr=[10,20,30,40]
let sum=0;
function ars(){
    for(let i=0;i<arr.length;i++){
        sum+=arr[i]
    }
     console.log("sum = ",sum)
}

ars()


// reversed array
var arr=[10,20,30,40,50]
var abc=arr.toReversed()
console.log(abc)


// reverse a string 
function reverseString(str) {
  return str.split('').reverse().join('');
}
const reversed = reverseString('hello'); // reversed is 'olleh'

console.log(reversed)


// find max and min in array
var arr=[10,20,30,40,50]
const max=Math.max(...arr)
const min=Math.min(...arr)
console.log("max",max)
console.log("min",min)


// fibonnaci sequnce
function fibonacci(n) {
let num1 = 0, num2 = 1, nextNum;

console.log("Fibonacci Sequence:");

for (let i = 1; i <= n; i++) {
    console.log(num1);
    nextNum = num1 + num2;
    num1 = num2;
    num2 = nextNum;
}
}

fibonacci(2);

// Remove even numbers from array
var arr=[1,2,3,4,5,6,7,8,9]
console.log(arr)
const oddnumbers= arr.filter(function(arr){
    return arr % 2 !== 0;
})

console.log(oddnumbers)


// arrow function 
var arr=[1,2,3,4,5,6,7,8,9]
const odd=arr.filter(n => n% 2 !==0);

console.log(odd)


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
vowels("abdul")

// palindrome 
function isPalindrome(str) {
    const reversed = str.split("").reverse().join("");
    return str === reversed;
}

console.log(isPalindrome("gfg"));

