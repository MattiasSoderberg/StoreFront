const clearCart = (cart) => {
  while (cart.firstChild) {
    cart.removeChild(cart.lastChild);
  }
};

const updateItemsInCart = (numItems) => {
  const displayNumberOfItems = document.getElementById("numberOfItems");
  displayNumberOfItems.innerText = numItems;
};

const renderCart = (customer) => {
  const shoppingCartDisplay = document.getElementById("shoppingCartBody");
  const shoppingCartTotalPrice = document.getElementById(
    "shoppingCartTotalPrice"
  );

  clearCart(shoppingCartDisplay);

  if (customer.cart.length === 0) {
    shoppingCartTotalPrice.innerHTML = `Total Price: <strong>${customer.getTotalPrice()}</strong> kr`;
    const p = document.createElement("p");
    p.innerText = "Your cart is empty";
    shoppingCartDisplay.appendChild(p);
  } else {
    shoppingCartTotalPrice.innerHTML = `Total Price: <strong>${customer.getTotalPrice()}</strong> kr`;

    customer.cart.forEach((item, index) => {
      const wrapper = document.createElement("div");
      wrapper.classList.add("card", "w-60", "mb-1", "bg-light");

      const container = document.createElement("div");
      container.classList.add("row", "g-0");

      const imgWrapper = document.createElement("div");
      imgWrapper.classList.add("col-md-4");
      imgWrapper.innerHTML = `<img src="${item.images[0].src.small}" class="img-fluid img-thumbnail rounded-start" alt="${item.images[0].alt}">`;

      const bodyWrapper = document.createElement("div");
      bodyWrapper.classList.add("col-md-6");
      bodyWrapper.innerHTML = `
          <div class="card-body">
              <h6 class="card-title">${item.name}</h6>
              <p class="card-text">Price: <strong>${item.price}</strong> kr</p>
          </div>
          `;

      const btnWrapper = document.createElement("div");
      btnWrapper.classList.add("card-body", "col-md-1", "align-self-center");
      const button = document.createElement("button");
      button.classList.add("btn");
      button.innerHTML = `
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
              <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
              </svg>
          `;

          button.addEventListener("click", () => {
            customer.updateTotalPrice(-item.price);
            wrapper.classList.add("scaleOnRemove");
            setTimeout(() => {
              customer.cart.splice(index, 1);
              renderCart(customer);
              updateItemsInCart(customer.cart.length);
            }, 100);
          });
          
      btnWrapper.appendChild(button);
      container.append(imgWrapper, bodyWrapper, btnWrapper);
      wrapper.appendChild(container);
      shoppingCartDisplay.appendChild(wrapper);

    });
  }
};
