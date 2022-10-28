class BaseScreen {
  constructor() {
    this.buttonOnScreen = '//android.widget.Button[@content-desc="%s"]';
    this.logoImage = '//android.widget.ImageView[@index="1"]';
    this.textField = '//android.widget.EditText';
  }
}

module.exports = new BaseScreen();
