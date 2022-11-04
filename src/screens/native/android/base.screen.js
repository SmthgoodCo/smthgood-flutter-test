class BaseScreen {
  constructor() {
    this.buttonOnScreen = '//android.widget.Button[contains(@content-desc, "%s")]'
    this.logoImage = '//android.widget.ImageView[@index="1"]'
    this.textField = '//android.widget.EditText'
    this.textOnScreen = '//android.view.View[contains(@content-desc, "%s")]'
    this.cartIcon = '(//android.widget.ImageView)[3]'
    this.backButton = '(//android.widget.ImageView)[1]'
  }
}

module.exports = new BaseScreen()
