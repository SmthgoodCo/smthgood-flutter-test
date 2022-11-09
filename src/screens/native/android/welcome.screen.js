class WelcomeScreen {
  constructor() {
    this.buttonOnScreen = '//android.widget.Button[@text="%s"]'
    this.googleIcon = '(//android.widget.ImageView)[1]'
    this.textField = '//android.widget.EditText[contains(@text, "%s")]'
  }
}

module.exports = new WelcomeScreen();
