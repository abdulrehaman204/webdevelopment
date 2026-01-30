
// for...in (This loop is used to iterate over iterable objects 
// like arrays, strings, Maps, Sets, etc., returning the values of the elements.)

const person = { name: "Abdul", age: 20 };
for (let key in person) 
{
 console.log(key + ": " + person[key]);
}


const hospital = {patientname: "rocky",age : 35,gender : "male",bloodgroup :"o+"}
for (let key in hospital)
{
    console.log(key + ":"+ hospital[key]);
}


// using with arrays
const nums = [10, 20, 30];

for (const index in nums) {
  console.log(index, nums[index]);
}
// 0 10
// 1 20
// 2 30


// count number of properties.
const details={name : "rehaman",age:23,Gender : "male"}
count=0;
for(let key in details)
{
    count++;
}

console.log("the count of the details is",count)



// for...of (This loop is used to iterate over iterable objects 
// like arrays, strings, Maps, Sets, etc., returning the values of the elements.)

const colors = ["red", "green", "blue"];
for (let color of colors)
{
    console.log(color);
}


// using map to for...of loop

let maps=new Map()
maps.set("abdul","rehaman")
for (let map of maps)
{

console.log(maps.get("abdul"))
}



const map = new Map([
  ["name", "Alice"],
  ["age", 30]
]);

for (const [key, value] of map) {
  console.log(key, value);
}
// name Alice
// age 30


// even numbers 
const num=[2,3,4,6,8,9,14,12]
let even=[]

for(const nums of num){
    if(nums % 2==0){
        even.push(nums)
    }
}

console.log("even numbers is ",even)



const number=[1,2,3,5,6,7,8,9]
let odd=[]

for(const numb of number){
    if(numb % 1==0){
        odd.push(numb)
    }
}

console.log(odd)



// forEach() method: This array method executes a provided function once for each array element.
const numbers = [1, 2, 3];
numbers.forEach(function(number) {
console.log(number); // Prints 1, 2, 3
});



const students = ['abdul','ravi']
for(i=0;i<students.length;i++){
students.forEach(function(student){
    console.log(student)
})}




