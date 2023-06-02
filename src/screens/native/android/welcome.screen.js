class WelcomeScreen {
  constructor() {
    this.buttonOnScreen = '//android.widget.Button[@text="%s"]'
    this.googleIcon = '//android.widget.ScrollView//android.view.View//android.widget.ImageView[1]'
    this.textField = '//android.widget.EditText[contains(@text, "%s")]'
    this.textView = '//android.widget.TextView[contains(@text, "%s")]'
    this.field = '//android.widget.EditText';
    this.password = '//android.widget.EditText[1]'
    this.repassword = '//android.widget.EditText[2]'
  }
}

module.exports = new WelcomeScreen();
