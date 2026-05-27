//  Write a Function to Reverse Words in a Sentence

function reversedstring(Sentence){
     return Sentence.split(" ").reverse().join(" ")
}
const reversed=reversedstring("JavaScript is powerful")


console.log(reversed)


// remove duplicates in array

let r = [1,2,33,4,2,4,5]

let ar =[...new Set(r)]

console.log(ar)


// Find Duplicate Numbers in an Array

function duplicates(arr){
    return arr.filter((item,index)=> arr.indexOf(item) !== index)
}

console.log(duplicates([1,2,3,2,4,5,1]))


//  Implement Array Sorting Without sort()

function sort(Arr){
    for(let i=0; i< Arr.length;i++){
        for(let j=0; j< Arr.length-1-i;j++){
            if(Arr[j]>Arr[j+1]){
                let temp = Arr[j]
                Arr[j] = Arr[j+1]
                Arr[j+1]=temp;
            }
        }
    }
    return Arr;
}

console.log(sort([9,8,4,5]))


// with sort()

let Ar=[9,8,74,3,5]

let result=[...sort(Ar)]

console.log(result)


// Count Word Occurrences

function Countwords(Sentence){
    let words = Sentence.split(" ")
    let count = {}
    words.forEach(word => {
        count[word] = (count[word] || 0 ) + 1;
        });
        return count;
}

console.log(Countwords("javascript hello javascript hello hi"))



// Create a Digital Clock

function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  hours = hours.toString().padStart(2, "0");
  minutes = minutes.toString().padStart(2, "0");
  seconds = seconds.toString().padStart(2, "0");

  const time = `${hours}:${minutes}:${seconds}`;

  document.getElementById("clock").textContent = time;
}


setInterval(updateClock, 1000);


// reversed string

function reversed1(str){
       return str.split('').reverse().join('')
}

 const reverse1=reversed1("frontend")

console.log(reverse1)



// find largest number in array

function largestf(arr){
    let largest = arr[0]
    for(let i=1;i<arr.length;i++){
        if(arr[i]>largest){
           largest = arr[i];
        }

    }
    return largest;
}

console.log(largestf([10,5,30,2,8]))


// Check Palindrome String

function isPalindrome(str){
    const at=str.split('').reverse().join('')
     return str === at;
}

console.log( isPalindrome("madam"))
console.log( isPalindrome("hello"))



