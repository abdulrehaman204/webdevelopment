// Reverse Words in a Sentence (Without Using Built-in Reverse)
function reverseWords(sentence) {
    let result = "";
    let word = "";
    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] !== " ") {
            word += sentence[i];
        } else {
            if (word.length > 0) {
                result = word + " " + result;
                word = "";
            }
        }
    }
    if (word.length > 0) {
        result = word + " " + result;
    }
    return result.trim();
}

// Example
console.log(reverseWords("I love JavaScript")); 
console.log(reverseWords("  Hello   world  ")); 


// Find Duplicate Elements with Count
function findDuplicates(arr) {
    const countMap = {};
    const result = {};
    for (let item of arr) {
        countMap[item] = (countMap[item] || 0) + 1;
    }
    for (let key in countMap) {
        if (countMap[key] > 1) {
            result[key] = countMap[key];
        }
    }
    return result;
}

// Examples
console.log(findDuplicates([1,2,2,3,4,4,4])); 
console.log(findDuplicates(["a","b","a","c","b","a"])); 



// Sequential Promise Execution (Async Flow Control)
function task(name, delay) {
    return () =>
        new Promise((resolve) => {
            setTimeout(() => {
                console.log(name + " done");
                resolve(name);
            }, delay);
        });
}
async function runTasks() {
    try {
        await task("Task 1", 1000)();
        await task("Task 2", 800)();
        await task("Task 3", 500)();
        console.log("All tasks completed");
    } catch (err) {
        console.log("Error:", err);
    }
}
runTasks();