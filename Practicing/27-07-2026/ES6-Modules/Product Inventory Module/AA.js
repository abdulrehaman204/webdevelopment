import Inventory, {
    addProduct,
    deleteProduct,
    getProducts
} from "./inventory.js";

const store = new Inventory();

addProduct({
    id: 1,
    name: "Laptop",
    price: 800
});

addProduct({
    id: 2,
    name: "Mouse",
    price: 25
});

addProduct({
    id: 3,
    name: "Keyboard",
    price: 40
});

console.log(getProducts())

store.showInventory()

deleteProduct(2)

console.log(getProducts())

store.showInventory();


