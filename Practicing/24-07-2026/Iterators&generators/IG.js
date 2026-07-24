// iterators
// An iterator is an object that lets you access elements one at a time.
// An iterator must have a next() method.

const arr = [10, 20, 30];
const iterator = arr[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());


// Custom Iterator
const numbers = {start: 1,end: 5,
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
                return {
                    done: true
                };
            }
        };
    }
};

for (const num of numbers) {
    console.log(num);
}

// Without for...of
const it = numbers[Symbol.iterator]();
console.log(it.next());
console.log(it.next());
console.log(it.next());


// Generators
// A generator is a special function that can pause and resume its execution.
// It is declared using function*.
// Instead of return, it typically uses yield.

function* number() {
    yield 1;
    yield 2;
    yield 3;
}
const gen = number();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

// Generator Execution
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


// infinite Generator
function* counter() {
    let i = 1;
    while (true) {
        yield i++;
    }
}

const c = counter();

console.log(c.next().value);
console.log(c.next().value);
console.log(c.next().value);


// Passing Values into Generator
function* greet() {
    const name = yield "What is your name?";
    yield `Hello ${name}`;
}

const ga = greet();
console.log(ga.next().value);
console.log(ga.next("Abdul").value);


// Generator as Iterator
function* fruits() {
    yield "Apple";
    yield "Banana";
    yield "Orange";
}

for (const fruit of fruits()) {
    console.log(fruit);
}


// Generator Delegation (yield*)
function* first() {
    yield 1;
    yield 2;
}

function* second() {
    yield* first();
    yield 3;
}

for (const value of second()) {
    console.log(value);
}
