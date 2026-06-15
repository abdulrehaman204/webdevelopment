import { totalSale, numberSale, buy, sell } from './Named-Export.js';

let buyer = {
    name: "GeeksforGeeks",
    total: 0
};

let item = {
    name: "butter",
    price: 10,
    quantity: 100
};

console.log(totalSale); 

buy(buyer, item);
sell(item);

console.log(buyer.total);    
console.log(item.quantity);   
console.log(numberSale);      
console.log(totalSale);       

