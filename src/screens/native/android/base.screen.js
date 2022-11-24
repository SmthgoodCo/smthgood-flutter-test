class BaseScreen {
  constructor() {
    this.buttonOnScreen = '//android.widget.Button[contains(@content-desc, "%s")]'
    this.itemOnScreen = '//android.widget.ImageView[contains(@content-desc, "%s")]'
    this.textField = '//android.widget.EditText'
    this.textOnScreen = '//android.view.View[contains(@content-desc, "%s")]'
    this.cartIcon = '(//android.widget.ImageView)[3]'
    this.backButton = '(//android.widget.ImageView)[1]'
    this.imageOnScreen = '//android.widget.ImageView[@index="%s"]'
  }
}

module.exports = new BaseScreen()
