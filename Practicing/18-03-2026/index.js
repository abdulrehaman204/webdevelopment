// Reverse a String

function reversedstring (str) {
    return str.split('').reverse().join('')
}

console.log(reversedstring("frontend"))

// Find the Largest Number in an Array

function  largest(arr){
    let largest=arr[0]
    for(let i=0;i<arr.length;i++){
        if(arr[i]>largest){
            largest=arr[i]
        }
    }
    return largest
}

console.log(largest([10, 5, 30, 2, 8]))

// Remove Duplicate Values from Array

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

console.log(removeDuplicates([1,2,2,3,4,4,5]))

// Check Palindrome String

function palindromestring(str){
    const reversed=str.split('').reverse().join('')
    return str == reversed
}

console.log(palindromestring("madam"))
console.log(palindromestring("hello"))

//Implement a Countdown Timer

let timeleft=10;
const displaytimer = document.getElementById("timer")

const countdown = setInterval(() => {
          timeleft--;
       displaytimer.textContent=timeleft;
    if(timeleft == 0){
        clearInterval(countdown)
        displaytimer.textContent="Time up !"
    }
    
},1000);


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