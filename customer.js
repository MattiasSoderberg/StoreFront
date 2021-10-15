class Customer {
  constructor() {
    this.totalPrice = 0;
    this.cart = [];
  }
  addToCart(product) {
    this.cart.push(product);
  }
  updateTotalPrice(price) {
    this.totalPrice += price;
  }
  getTotalPrice() {
    return this.totalPrice;
  }
}
