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
    const el = this.getSelector().buttonOnScreen.replace("%s", text);
    await ActionHelper.waitForElement(el);
    await ActionHelper.click(el);
  }

  async verifyButtonDisplay(text) {
    const el = this.getSelector().buttonOnScreen.replace("%s", text);
    await ActionHelper.waitForElement(el);
    (await ActionHelper.isVisible(el)).should.true;
  }

  async verifyLogoDisplay() {
    const el = this.getSelector().logoImage
    await ActionHelper.waitForElement(el);
    (await ActionHelper.isVisible(el)).should.true;
  }

  async enterText(text) {
    const el = this.getSelector().textField
    await ActionHelper.waitForElement(el);
    await ActionHelper.click(el);
    await ActionHelper.sendText(el, text);
    await ActionHelper.pressKeyCode(66);
  }

  async getMessage(text) {
    await ActionHelper.waitForElement(this.getSelector().messageOnScreen);
    await ActionHelper.getText(this.getSelector().messageOnScreen).should.equal(text);
  }
}

module.exports = BasePage;
