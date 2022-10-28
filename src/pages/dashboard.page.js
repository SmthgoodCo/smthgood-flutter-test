const { WebDriverAgent } = require("appium-webdriveragent");
const ActionHelper = require("../helpers/actionHelpers");
const BasePage = require("./base.page");
require("chai").should();

class DashboardPage extends BasePage {
  getObjectLocator() {
    const platform = browser.capabilities.platformName.toLowerCase();
    return require(`./../screens/native/${platform}/dashboard.screen.js`);
  }

  async launchApp() {
    await ActionHelper.launchApp();
    await ActionHelper.switchToNativeContext();
  }

  async clickSkipTutorial() {
    const el = this.getObjectLocator().skipTutorialButton
    await ActionHelper.checkLocatorExist(el, ActionHelper.click(el));
  }
}

module.exports = DashboardPage;
