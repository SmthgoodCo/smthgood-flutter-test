const { WebDriverAgent } = require("appium-webdriveragent");
const ActionHelper = require("../helpers/actionHelpers");
const BasePage = require("./base.page");
require("chai").should();

class WelcomePage extends BasePage {
  getObjectLocator() {
    const platform = browser.capabilities.platformName.toLowerCase();
    return require(`./../screens/native/${platform}/welcome.screen.js`);
  }

  async launchApp() {
    await ActionHelper.launchApp();
    await ActionHelper.switchToNativeContext();
  }

  launchAppiOS() {
    ActionHelper.launchApp();
    ActionHelper.switchToNativeContext();
  }

  clickContinueButton() {
    ActionHelper.waitForElement(this.getObjectLocator().continueButton);
    ActionHelper.click(this.getObjectLocator().continueButton);
  }
}

module.exports = WelcomePage;
