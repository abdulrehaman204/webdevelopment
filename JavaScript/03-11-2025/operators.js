// assignment operators 

// (=,+=,-=,*=,**=,/=,%=,:)

// = The Simple Assignment Operator assigns a simple value to a variable.
let x=20;
let y=x;
console.log(y)

let z=10;
let w=30+z;
console.log(w)

let xy=500;
let yz=100;
console.log(xy=yz)


// += The Addition Assignment Operator adds a value to a variable.
let v=40;
v +=10;
console.log(v)

let u=100;
u+=20;
console.log(u)

let uv=200;
uv +=50;
console.log(uv)


// -= The Subtraction Assignment Operator subtracts a value from a variable.
let t=50;
t -=10;
console.log(t)

let s=80;
s -=20;
console.log(s)

let ts=100;
ts -=50;
console.log(ts)


// *= The Multiplication Assignment Operator multiplies a variable.
let r=200;
r *=5;
console.log(r)

let q=500;
q *=10;
console.log(q)

let qr=600;
qr *=20;
console.log(qr)


// **= The Exponentiation Assignment Operator raises a variable to the power of the operand.
let p=10;
p **=5;
console.log(p)

let o=10;
let n=20;
console.log(o**=n)


let pn=15;
pn **=5;
console.log(pn)

// /= The Division Assignment Operator divides a variable.
let m=100;
m /=5;
console.log(m)

let l=400;
let k=200;
console.log(l/=k)

let ml=1000;
ml /= 200;
console.log(ml)


// %= The Remainder Assignment Operator assigns a remainder to a variable.
let j=1000;
j %=5;
console.log(j)

let i=300;
i %=2;
console.log(i)

let ij=8000;
ij %=3;
console.log(ij)


// logical assignment operators

// (&&=,||=,??=)

// &&= If the first value is true, the second value is assigned.
let a=true;
let b=a &&=15;
console.log(b)

let c=false;
let d=c &&=20;
console.log(d)

let e=0;
let f=e &&=50;
console.log(f)


// ||= If the first value is false, the second value is assigned.
let g=false;
let h=g ||=500;
console.log(h)


let ab=true;
let ac=ab ||=500;
console.log(ac)


let cd=undefined;
let dc=cd ||=700;
console.log(dc)


// ??= If the first value is undefined or null, the second value is assigned.
let ad=undefined;
let ae=ad ??=700;
console.log(ae)


let af=null;
let ag=af ??=800;
console.log(ag)


let ah=1;
let ai=ah ??=100;
console.log(ai)