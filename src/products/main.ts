import { addProduct, calcStock, products } from "./product.service";

addProduct({
  name: 'Prod1',
  createdAt: new Date(1994, 1, 1),
  stock: 5,
  size: 'M',
});

addProduct({
  name: 'Prod2',
  createdAt: new Date(1994, 1, 1),
  stock: 6,
  size: 'M',
});

console.log(products);
const total = calcStock();
console.log(total);
