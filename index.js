const url = "https://mock-data-api.firebaseio.com/webb21/products.json";

const customer = new Customer();

let products = [];

const fetchData = async (url) => {
  await fetch(url)
    .then((res) => res.json())
    .then((data) => (products = data));

  products.forEach((product) => {
    createProduct(product);
  });
};

const filterProducts = (filterValue) => {
  clearProductList();
  if (filterValue) {
    console.log(filterValue);
    const filteredProducts = products.filter(
      (product) => product.rating >= filterValue
    );

    filteredProducts.forEach((product) => {
      createProduct(product);
    });
  }
  else {
    products.forEach(product => {
      createProduct(product)
    })
  }
};

fetchData(url);
renderCart(customer);

const filterInput = document.getElementById("filterInput");
const filterBtn = document.getElementById("filterBtn");
const form = document.getElementById("navForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const filterValue = filterInput.value;

  filterProducts(filterValue);

  filterInput.value = "";
});
