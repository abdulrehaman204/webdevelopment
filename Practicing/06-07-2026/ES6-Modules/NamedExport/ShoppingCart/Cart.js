const cart = [
    { name: "Laptop", price: 50000, qty: 1 },
    { name: "Mouse", price: 800, qty: 2 },
    { name: "Keyboard", price: 1500, qty: 1 }
];

export function calculateTotal() {
    return cart.reduce((total, item) => {
        return total + item.price * item.qty;
    }, 0);
}

export function getMostExpensiveProduct() {
    return cart.reduce((max, item) =>
        item.price > max.price ? item : max
    );
}