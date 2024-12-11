// L0 - Transforming and Filtering with map() and forEach()

const products = [
  {
    name: "Television",
    price: 75,
  },
  {
    name: "Laptop",
    price: 85,
  },
  {
    name: "Computer",
    price: 45,
  },
];

function processProducts(products) {
  let productName = products.map(({ name }) => name);

  productName.forEach((name) => {
    const product = products.find((product) => product.name === name);

    if (product.price > 50) {
      console.log(`${name} is above $50`);
    } else {
      console.log(`${name} is below $50`);
    }
  });
}

processProducts(products);