// common methods

// parsint
console.log(parseInt("123"));      
console.log(parseInt("123.45"));   
console.log(parseInt("abc"));

// parsefloat
console.log(parseFloat("12.33"))
console.log(parseFloat("2.44px"))

// json.stringfy
const obj2 = { name: "Abdul", age: 23 };
const str = JSON.stringify(obj2);
console.log(str);

// json.parse
const str1 = '{"name":"Abdul","age":25}';
const obj3 = JSON.parse(str1);
console.log(obj3.name); 

// tostring
let n = 10;
console.log(n.toString())

// tofixed
let num1 = 12.345;
console.log(num1.toFixed(2)); // "12.35"