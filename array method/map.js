const prices = [20, 10, 30, 25, 15, 40, 80, 5];

// const salePrcies = prices.map((price) => {
//   return price / 2;
// });

const products = [
  {
    name: "gold star",
    price: 20,
  },
  {
    name: "mshroom",
    price: 40,
  },
  {
    name: "green",
    price: 40,
  },
];

const saleProducts = products.map((product) => {
  if (product.price > 30) {
    return { name: product.name, price: product.price / 2 };
  } else {
    return product;
  }
});

console.log(saleProducts);
