import { calculateTotal, getMostExpensiveProduct } from "./Cart.js";

console.log("Total Bill :", calculateTotal());

const product = getMostExpensiveProduct();

console.log("\nMost Expensive Product");
console.log(product.name);