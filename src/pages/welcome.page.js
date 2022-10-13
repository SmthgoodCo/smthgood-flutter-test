const { WebDriverAgent } = require("appium-webdriveragent");
const ActionHelper = require("../helpers/actionHelpers");
const BasePage = require("./base.page");
require("chai").should();

class WelcomePage extends BasePage {
  getObjectLocator() {
    const platform = browser.capabilities.platformName.toLowerCase();
    return require(`./../screens/native/${platform}/welcome.screen.js`);
  }

  launchApp() {
    ActionHelper.launchApp();
    ActionHelper.switchToNativeContext();
  }

  launchAppiOS() {
    ActionHelper.launchApp();
    ActionHelper.switchToNativeContext();
  }

  verifyContinueButtonDisplay() {
    ActionHelper.waitForElement(this.getObjectLocator().continueButton);
    ActionHelper.isVisible(this.getObjectLocator().continueButton).should.true;
  }
}

module.exports = WelcomePage;
