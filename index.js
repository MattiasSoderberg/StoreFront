const url = "https://mock-data-api.firebaseio.com/webb21/products.json";

const customer = new Customer();

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    data.forEach((product) => {
      createProduct(product, 0);
    });
  });

customer.renderCart();

const filterInput = document.getElementById("filterInput");
const filterBtn = document.getElementById("filterBtn");
filterBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const filterValue = filterInput.value;

  clearProductList();

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      data.forEach((product) => {
        createProduct(product, filterValue);
      });
    });
});
