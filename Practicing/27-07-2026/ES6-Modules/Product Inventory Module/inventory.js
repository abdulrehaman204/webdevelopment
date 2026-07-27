const products = [];

// Named Export
export function addProduct(product) {
    products.push(product);
}

// Named Export
export function deleteProduct(id) {
    const index = products.findIndex(product => product.id === id);

    if (index !== -1) {
        products.splice(index, 1);
    }
}

// Named Export
export function getProducts() {
    return products;
}

// Default Export
export default class Inventory {
    showInventory() {
        console.log("Current Inventory");
        console.log(products);
    }
}


