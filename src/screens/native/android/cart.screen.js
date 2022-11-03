class CartScreen {
  constructor() {
    this.minusButton = '(//android.widget.ImageView)[2]'
    this.backButton = '(//android.widget.ImageView)[1]'
    this.addedToCartMsg = '//android.view.View[@content-desc="ADDED TO CART"]'
    this.placeOderButton = '//android.widget.Button[contains(@content-desc, "PLACE ORDER")]'
    this.oderPlacedMsg = '//android.view.View[@content-desc="%s"]'
    this.addToCartButton = '//android.widget.Button[@content-desc="ADD TO CART"]'
  }
}

module.exports = new CartScreen();
