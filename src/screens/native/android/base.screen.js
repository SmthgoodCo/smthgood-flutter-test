class BaseScreen {
  constructor() {
    this.buttonOnScreen = '//android.widget.Button[@content-desc="%s"]';
    this.logoImage = '//android.widget.ImageView[@index="1"]';
    this.textField = '//android.widget.EditText';
    this.titleOnScreen = '//android.view.View[@content-desc="%s"]'
  }
}

module.exports = new BaseScreen();
