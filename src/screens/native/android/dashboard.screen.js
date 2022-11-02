class DashboardScreen {
  constructor() {
    this.skipTutorialButton = '//android.view.View[@index="2"]'
    this.sectionOnDashboard = '//android.widget.ImageView[@content-desc="%s"]';
    this.searchProductField = '//android.widget.ImageView[@text="Looking for something?"]';
    this.productName = '//android.widget.ImageView[contains(@content-desc, "%s")]';
    this.addToCartButton = '//android.widget.Button[@content-desc="ADD TO CART"]';
    this.buttonOnScreen = '//android.widget.Button';
    this.cartIcon = '(//android.widget.ImageView)[3]';
    this.minusButton = '//android.view.View[contains(@content-desc,"​A​o​ ​d​a​i")]//android.widget.ImageView[2]';
    this.backButton = '(//android.widget.ImageView)[1]';
    this.addedToCartMsg = '//android.view.View[@content-desc="ADDED TO CART"]'
    this.placeOderButton = '//android.widget.Button[contains(@content-desc, "PLACE ORDER")]'
    this.oderPlacedMsg = '//android.view.View[@content-desc="Woo-hoo! Your order is placed"]'
    this.productInformation = '//android.view.View[@content-desc="%s"]'
  }
}

module.exports = new DashboardScreen();
