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

  async verifySectionOnHomePage(section) {
    const el = await this.getSelector().itemOnScreen.replace("%s", section);
    await ActionHelper.waitForElement(el);
    (await ActionHelper.isVisible(el)).should.true;
  }

  async enterText(text) {
    const el = await this.getSelector().textField;
    await ActionHelper.waitForElement(el);
    await ActionHelper.sendText(el, text);
  }

  async clickBack() {
    const el = await this.getSelector().backButton;
    await ActionHelper.waitForElement(el);
    await ActionHelper.click(el);
  }

  async verifyTextIsDisplayed(text) {
    const el = await this.getSelector().textOnScreen.replace("%s", text);
    await ActionHelper.waitForElement(el);
    (await ActionHelper.isVisible(el)).should.true;
  }

  async verifyTextIsNotDisplayed(text) {
    const el = await this.getSelector().textOnScreen.replace("%s", text);
    await ActionHelper.waitForNotElement(el);
    (await ActionHelper.isVisible(el)).should.false;
  }

  async clickCart() {
    const el = await this.getSelector().cartIcon;
    await ActionHelper.waitForElement(el);
    await ActionHelper.click(el);
  }

  async clickTextOnScreen(text) {
    const el = await this.getSelector().textOnScreen.replace("%s", text);
    await ActionHelper.waitForElement(el);
    await ActionHelper.click(el);
  }

  async clickImageOnScreen(text) {
    const el = await this.getSelector().imageOnScreen.replace("%s", text);
    await ActionHelper.waitForElement(el);
    await ActionHelper.click(el);
  }

  async clickItemOnScreen(text) {
    const el = await this.getSelector().itemOnScreen.replace("%s", text);
    await ActionHelper.waitForElement(el);
    await ActionHelper.click(el);
  }
}

module.exports = BasePage;
