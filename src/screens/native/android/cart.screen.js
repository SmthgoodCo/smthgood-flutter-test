class CartScreen {
  constructor() {
    this.minusButton = '(//android.widget.ImageView)[2]'
    this.placeOderButton = '//android.widget.Button[contains(@content-desc, "PLACE ORDER")]'
    this.addToCartButton = '//android.widget.Button[@content-desc="ADD TO CART"]'
  }
}

module.exports = new CartScreen()
