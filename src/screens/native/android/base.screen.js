class BaseScreen {
  constructor() {
    this.buttonOnScreen = '//android.widget.Button[@content-desc="%s"]';
    this.textField = '//android.widget.EditText';
  }
}

module.exports = new BaseScreen();
