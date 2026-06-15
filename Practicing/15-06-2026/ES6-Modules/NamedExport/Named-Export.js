let numberSale = 0;
let totalSale = 0;

export function buy(buyer, item) {
    buyer.total += item.price;
}

export function sell(item) {
    totalSale += item.price;
    numberSale++;
    item.quantity--;
}

export { totalSale, numberSale };