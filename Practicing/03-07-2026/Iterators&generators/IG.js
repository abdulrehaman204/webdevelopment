// iterators 
const colors = ['red', 'green', 'blue'];
const GFG = colors[Symbol.iterator]();
console.log(GFG.next());
console.log(GFG.next());
console.log(GFG.next());
console.log(GFG.next());

// genarators
function* gfg() {
    yield 10;
    yield 20;
    yield 30;
}
const generator = gfg();
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);


function* demo() {
  console.log("Start");
  yield 1;
  console.log("Middle");
  yield 2;
  console.log("End");
}
const g = demo();
g.next(); 
g.next(); 
g.next(); 

// logical tasks
// custom iterator
const numbers = {
  start: 1,
  end: 5,
  [Symbol.iterator]() {
    let current = this.start;
    let end = this.end;
    return {
      next() {
        if (current <= end) {
          return {
            value: current++,
            done: false
          };
        }
        return { done: true };
      }
    };
  }
};
for (const num of numbers) {
  console.log(num);
}

// reverse string iterator
function createReverseIterator(str) {
  return {
    [Symbol.iterator]() {
      let index = str.length - 1;
      return {
        next() {
          if (index >= 0) {
            return {
              value: str[index--],
              done: false
            };
          }
          return { done: true };
        }
      };
    }
  };
}
for (const ch of createReverseIterator("hello")) {
  console.log(ch);
}


// range iterators
function range(start, end) {
  return {
    [Symbol.iterator]() {
      let current = start;

      return {
        next() {
          if (current <= end) {
            return {
              value: current++,
              done: false
            };
          }

          return { done: true };
        }
      };
    }
  };
}

for (const num of range(10, 15)) {
  console.log(num);
}

// even number iterators
function evenNumbers(limit) {
  return {
    [Symbol.iterator]() {
      let current = 2;

      return {
        next() {
          if (current <= limit) {
            const value = current;
            current += 2;

            return {
              value,
              done: false
            };
          }

          return { done: true };
        }
      };
    }
  };
}

console.log([...evenNumbers(10)]);

// basic genarator
function* words() {
  yield "Hello";
  yield "World";
  yield "JavaScript";
}

for (const word of words()) {
  console.log(word);
}

// genarator range
function* range(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

for (const num of range(1, 5)) {
  console.log(num);
}

// fibonace generator
function* fibonacci() {
  let a = 0;
  let b = 1;

  while (true) {
    yield a;

    [a, b] = [b, a + b];
  }
}

const fib = fibonacci();

for (let i = 0; i < 10; i++) {
  console.log(fib.next().value);
}

// Alphabet Generator
function* alphabet() {
  for (let i = 65; i <= 90; i++) {
    yield String.fromCharCode(i);
  }
}

console.log([...alphabet()]);