const { WebDriverAgent } = require("appium-webdriveragent");
const ActionHelper = require("../helpers/actionHelpers");
const BasePage = require("./base.page");
const userData = require("../testData/user.json");
require("chai").should();
const uniqueNumber = ActionHelper.randomNumber(5);

class WelcomePage extends BasePage {
  getObjectLocator() {
    const platform = browser.capabilities.platformName.toLowerCase();
    return require(`./../screens/native/${platform}/welcome.screen.js`);
  }

  async launchApp() {
    await ActionHelper.launchApp();
    await ActionHelper.switchToNativeContext();
  }

  async launchAppiOS() {
    await ActionHelper.launchApp();
    await ActionHelper.switchToNativeContext();
  }
  
  async  skipPrivacyPopup() {
    await this.verifyTextIsDisplayed('We Care About Your Privacy')
    await this.clickButtonOnScreen('AGREE')
  }

  async loginWithEmail() {
    await this.enterText(userData.valid.email);
    await this.clickButtonOnScreen("CONTINUE");
    await this.enterText(userData.valid.password);
    await this.clickButtonOnScreen("SIGN IN");
  }

  async registerNewUser() {
    const email = `auto${uniqueNumber}@gmail.com`;
    const username = `QuocBao_${uniqueNumber}`;
    await this.enterText(email);
    await this.clickButtonOnScreen("CONTINUE");
    await this.enterText("Bao");
    await this.clickButtonOnScreen("NEXT");
    await this.enterText(username);
    await this.clickButtonOnScreen("NEXT");
    await this.inputText(await this.getObjectLocator().password, userData.valid.password);
    await this.inputText(await this.getObjectLocator().repassword, userData.valid.password);
    await this.clickButtonOnScreen("NEXT");
  }

  async login(email, passsword) {
    await this.enterText(email);
    await this.clickButtonOnScreen("CONTINUE");
    await this.enterText(passsword);
    await this.clickButtonOnScreen("SIGN IN");
  }

  async clickHere() {
    const el = await this.getSelector().textOnScreen.replace("%s", "click here");
    await ActionHelper.swipeVertical("up");
    await ActionHelper.waitForElement(el);
    await ActionHelper.click(el);
  }

  async verifyAcceptCookies() {
    const el = await this.getObjectLocator().buttonOnScreen.replace("%s", "ACCEPT COOKIES");
    await ActionHelper.waitForElement(el);
    (await ActionHelper.isVisible(el)).should.true;
  }

  async enterMultipleValue(value) {
    const el = await this.getObjectLocator().field;
    await ActionHelper.waitForElement(el);
    await ActionHelper.sendText(el, ActionHelper.randomNumber(value));
  }

  async enterValueInTextField(field, value) {
    const el = await this.getObjectLocator().textField.replace("%s", field);
    await ActionHelper.waitForElement(el);
    await ActionHelper.sendText(el, value);
  }

  async verifyValueInTextField(value) {
    const el = await this.getObjectLocator().textField.replace("%s", value);
    await ActionHelper.waitForElement(el);
    (await ActionHelper.isVisible(el)).should.true;
  }

  async clickGoogleIcon() {
    const el = await this.getObjectLocator().googleIcon;
    await ActionHelper.waitForElement(el);
    await ActionHelper.click(el);
  }

  async signInGoogleAccount() {
    const textField = await this.getSelector().textField;
    const googleAcc = await this.getObjectLocator().textView.replace("%s", userData.googleAccount.email);

    if (await ActionHelper.isVisible(googleAcc) === true) {
      await ActionHelper.click(googleAcc);
    } else {
      await ActionHelper.waitForElement(textField);
      await ActionHelper.sendText(textField, userData.googleAccount.email);
      await ActionHelper.sendText(textField, userData.googleAccount.password);
      await ActionHelper.click(await this.getObjectLocator().buttonOnScreen.replace("%s", "I agree"));
      await ActionHelper.click(await this.getObjectLocator().buttonOnScreen.replace("%s", "ACCEPT"));
    }
  }

  async enterPassword(value) {
    const el = await this.getObjectLocator().password;
    await ActionHelper.waitForElement(el);
    await ActionHelper.sendText(el, value);
  }

  async enterRepassword(value) {
    const el = await this.getObjectLocator().repassword;
    await ActionHelper.waitForElement(el);
    await ActionHelper.sendText(el, value);
  }
}

module.exports = WelcomePage;
