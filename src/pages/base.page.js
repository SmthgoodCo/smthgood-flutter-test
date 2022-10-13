const ActionHelper = require("../helpers/actionHelpers");
require("chai").should();

class BasePage {
  getSelector() {
    const platform = browser.capabilities.platformName.toLowerCase();
    return require(`./../screens/native/${platform}/base.screen.js`);
  }

  dismissAllowAccessLocationDialgIfPresent() {
    try {
      ActionHelper.waitForElement(
        this.getSelector().permissionControllerButton
      );
      ActionHelper.click(this.getSelector().permissionControllerButton);
    } catch (error) {
      console.log("Dialog is not displayed !!!");
    }
  }

  allowAllowAccessLocationDialgIfPresent() {
    try {
      ActionHelper.waitForElement(
        this.getSelector().permissionControllerButtonAllow
      );
      ActionHelper.click(this.getSelector().permissionControllerButtonAllow);
    } catch (error) {
      console.log("Dialog is not displayed !!!");
    }
  }

  clickButtonOnScreen(text) {
    const el = this.getSelector().buttonOnScreen.replace("%s", text);
    ActionHelper.waitForElement(el);
    ActionHelper.click(el);
  }

  verifyText(text) {
    const el = this.getSelector().textOnScreen.replace("%s", text);
    ActionHelper.waitForElement(el);
    ActionHelper.isVisible(el).should.true;
  }

  verifyTextWebView(text) {
    let el = this.getSelector().textOnWebView.replace("%s", text);
    ActionHelper.waitForElement(el);
    ActionHelper.isVisible(el).should.true;
  }

  verifyTextNavigation(text) {
    const el = this.getSelector().textOnScreen.replace("%s", text);
    ActionHelper.waitForElement(el);
    ActionHelper.isVisible(el).should.true;
  }

  verifyBrowserText(text) {
    const el = this.getSelector().textOnWebView.replace("%s", text);
    ActionHelper.waitForElement(el);
    ActionHelper.isVisible(el).should.true;
  }

  verifyButton(text) {
    const el = this.getSelector().buttonOnScreen.replace("%s", text);
    ActionHelper.waitForElement(el);
    ActionHelper.isVisible(el).should.true;
  }

  clickLinkOnMenu(text) {
    const el = this.getSelector().textOnScreen.replace("%s", text);
    ActionHelper.waitForElement(el);
    ActionHelper.click(el);
  }

  getMessage(text) {
    ActionHelper.waitForElement(this.getSelector().messageOnScreen);
    ActionHelper.getText(this.getSelector().messageOnScreen).should.equal(text);
  }

  verifyElement(locator) {
    ActionHelper.waitForElement(locator);
    ActionHelper.isVisible(locator).should.true;
  }

  pressEnterOnInput(locator) {
    ActionHelper.pressEnterOnInput(locator);
  }

  swipeDown() {
    ActionHelper.swipeDown();
  }
}

module.exports = BasePage;
