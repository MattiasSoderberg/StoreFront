class Customer {
  constructor() {
    this.totalPrice = 0;
    this.cart = [];
  }
  addToCart(product) {
    this.cart.push(product);
  }
  addToTotal(price) {
    this.totalPrice += price;
  }
  getTotalSum() {
    return this.totalPrice;
  }
  renderCart() {
    const shoppingCartDisplay = document.getElementById("shoppingCartBody");
    const shoppingCartTotalPrice = document.getElementById(
      "shoppingCartTotalSum"
    );

    this.clearCart(shoppingCartDisplay);

    shoppingCartTotalPrice.innerHTML = `Total Price: ${this.getTotalSum()}`;
    this.cart.forEach((item) => {
      const wrapper = document.createElement("div");
      wrapper.classList.add("card");
      wrapper.classList.add("w-60");
      wrapper.classList.add("mb-1");
      wrapper.innerHTML = `
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${item.images[0].src.small}" class="img-fluid img-thumbnail rounded-start" alt="${item.images[0].alt}">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${item.name}</h5>
                        <p class="card-text">Price: ${item.price}</p>
                    </div>
                </div>
            </div>
          `;
      shoppingCartDisplay.appendChild(wrapper);
    });
  }
  clearCart(cart) {
    while (cart.firstChild) {
      cart.removeChild(cart.lastChild);
    }
  }
}

const url = "https://mock-data-api.firebaseio.com/webb21/products.json";

const customer = new Customer();

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    data.forEach((product) => {
      createProduct(product);
    });
  });

const filterInput = document.getElementById("filterInput");
const filterBtn = document.getElementById("filterBtn");
filterBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const filterValue = filterInput.value;

  clearProductList()

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      data.forEach((product) => {
        createProduct(product, filterValue);
      });
    });
});
