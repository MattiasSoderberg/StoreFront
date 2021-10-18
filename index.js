const url = "https://mock-data-api.firebaseio.com/webb21/products.json";

const customer = new Customer();

let products = []
const fetchData = async (url) => {
  let res = await fetch(url)
  products = await res.json()
}

const filterProducts = (filterValue) => {
  const filteredProducts = products.filter(product => product.rating >= filterValue)
  filteredProducts.forEach(product => {
    createProduct(product)
  })
}
fetchData(url)

setTimeout(() => {
  products.forEach(product => {
    createProduct(product)
  })
}, 1000);

renderCart(customer);

const filterInput = document.getElementById("filterInput");
const filterBtn = document.getElementById("filterBtn");
const form = document.getElementById("navForm")

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const filterValue = filterInput.value;

  clearProductList();

  filterProducts(filterValue)

    filterInput.value = ""
});
