const ActionHelper = require("../helpers/actionHelpers");
require("chai").should();

class BasePage {

  getSelector() {
    const platform = browser.capabilities.platformName.toLowerCase();
    return require(`./../screens/native/${platform}/base.screen.js`);
  }

  dismissDialogIfPresent() {
    try {
      ActionHelper.waitForElement(
        this.getSelector().permissionControllerButton
      );
      ActionHelper.click(this.getSelector().permissionControllerButton);
    } catch (error) {
      console.log("Dialog is not displayed !!!");
    }
  }

  async clickButtonOnScreen(text) {
    const el = await this.getSelector().buttonOnScreen.replace("%s", text);
    await ActionHelper.waitForElement(el);
    await ActionHelper.click(el);
  }

  async verifyButtonDisplay(text) {
    const el = await this.getSelector().buttonOnScreen.replace("%s", text);
    await ActionHelper.waitForElement(el);
    (await ActionHelper.isVisible(el)).should.true;
  }

  async verifySectionOnDashboard(section) {
    const el = await this.getObjectLocator().sectionOnDashboard.replace('%s', section)
    await ActionHelper.waitForElement(el);
    (await ActionHelper.isVisible(el)).should.true;
  }

  async enterText(text) {
    const el = await this.getSelector().textField
    await ActionHelper.waitForElement(el);
    await ActionHelper.sendText(el, text);
  }

  async getMessage(text) {
    await ActionHelper.waitForElement(this.getSelector().messageOnScreen);
    await ActionHelper.getText(this.getSelector().messageOnScreen).should.equal(text);
  }

  async clickCart() {
    const el = await this.getSelector().cartIcon
    await ActionHelper.waitForElement(el)
    await ActionHelper.click(el)
    await ActionHelper.pause(6)
  }
}

module.exports = BasePage;
