const productList = document.getElementById("productList");

const createImage = (product) => {
  const image = document.createElement("img");
  image.classList.add("card-img-top", "mt-2")
  image.src = product.images[0].src.small;
  image.alt = product.images[0].alt;
  // image.addEventListener("click", () => {
  //   customer.updateTotalPrice(product.price);
  //   customer.addToCart(product);
  //   customer.renderCart();
  // });
  return image;
};

const createTitle = (product) => {
  const titleWrapper = document.createElement("div");
  titleWrapper.classList.add("card-body");

  const title = document.createElement("h5");
  title.classList.add("card-title");
  title.innerText = product.name;

  const desc = document.createElement("p");
  desc.classList.add("card-text");
  desc.innerText = product.description;

  titleWrapper.appendChild(title);
  titleWrapper.appendChild(desc);
  return titleWrapper;
};

const createUl = (product) => {
  const ul = document.createElement("ul");
  ul.classList.add("list-group", "list-group-flush", "mb-2");

  const priceLi = document.createElement("li");
  priceLi.classList.add("list-group-item", "bg-transparent");
  priceLi.innerHTML = `Price: <strong>${product.price}</strong> kr`;
  const ratingLi = document.createElement("li");
  ratingLi.classList.add("list-group-item", "bg-transparent");
  ratingLi.innerHTML = `Rating: ${product.rating}`;
  const stockLi = document.createElement("li");
  stockLi.classList.add("list-group-item", "bg-transparent");
  stockLi.innerHTML = `Stock: ${product.stock}`;

  ul.appendChild(priceLi);
  ul.appendChild(ratingLi);
  ul.appendChild(stockLi);

  return ul;
};

const createButton = (product, wrapper) => {
  const buttonWrapper = document.createElement("div");
  buttonWrapper.classList.add("card-footer", "bg-transparent", "mb-2");
  const buyBtn = document.createElement("button");
  buyBtn.classList.add("btn", "btn-primary");
  buyBtn.innerText = "Add To Cart";
  buyBtn.addEventListener("click", () => {
    customer.updateTotalPrice(product.price);
    customer.addToCart(product);
    renderCart(customer);
    updateItemsInCart(customer.cart.length)
    wrapper.classList.add("scaleOnClick")
    setTimeout(() => {
      wrapper.classList.remove("scaleOnClick")
    }, 100);
  });

  buttonWrapper.appendChild(buyBtn);

  return buttonWrapper;
};

const createProduct = (product) => {
    const wrapper = document.createElement("div");
    wrapper.classList.add("card", "mb-5", "bg-light");
    wrapper.style.width = "20rem";

    
    wrapper.appendChild(createImage(product));
    wrapper.appendChild(createTitle(product));
    wrapper.appendChild(createUl(product));
    wrapper.appendChild(createButton(product, wrapper));

    productList.appendChild(wrapper);
};

const clearProductList = () => {
    while (productList.firstChild) {
      productList.removeChild(productList.lastChild);
    }
}
