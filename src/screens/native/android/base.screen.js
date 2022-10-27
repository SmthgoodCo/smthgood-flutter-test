class BaseScreen {
  constructor() {
    this.buttonOnScreen = '//android.widget.Button[@content-desc="CONTINUE"]';
    this.textField = '//android.widget.EditText';
  }
}

module.exports = new BaseScreen();
