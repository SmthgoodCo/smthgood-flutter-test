const { default: $ } = require("webdriverio/build/commands/browser/$");
const { signInButton } = require("../screens/native/ios/welcome.screen");

const waitTimeInSeconds = 120000;
class ActionHelper {
  static async launchBrowserUrl(urlToLaunch) {
    await browser.url(urlToLaunch);
  }

  static getTitle() {
    return browser.getTitle();
  }

  static async launchApp() {
    await driver.launchApp();
  }

  static async closeApp() {
    await driver.closeApp();
  }

  static backgroundApp() {
    // driver.background(20)
    driver.pressKeyCode(3);
  }

  static async switchToNativeContext() {
    await browser.switchContext("NATIVE_APP");
  }

  static async pause(seconds) {
    await browser.pause(seconds * 1000);
  }

  static async isVisible(locator) {
    return (await (await browser.$(locator)).isDisplayed()) ? true : false;
  }

  static async pressKeyCode(value) {
    await driver.pressKeyCode(value);
  }

  static async click(locator) {
    await browser.$(locator).click();
    await this.pause(2);
  }

  static async checkLocatorExist(locator, action) {
    try {
      await this.waitForElement(locator);
      await action;
    } catch (error) {
      console.log("Locator is not displayed !!!");
    }
  }

  static async waitForElement(locator) {
    this.pause(2);
    await browser.$(locator).waitForDisplayed({ waitTimeInSeconds });
  }

  static async getAttributeValue(locator, attributeName) {
    return await browser.$(locator).getAttribute(attributeName);
  }

  static async waitForNotElement(locator) {
    await browser
      .$(locator)
      .waitForDisplayed({ waitTimeInSeconds, reverse: true });
  }

  static async clearText(locator) {
    await browser.$(locator).clearValue();
  }

  static async sendText(locator, inputText) {
    await this.click(locator);
    await this.clearText(locator);
    await browser.$(locator).addValue(inputText);
    await ActionHelper.pressKeyCode(66);
  }

  static async getText(locator) {
    return await browser.$(locator).getText();
  }

  static async scrollRecipe() {
    let scrollX = driver.getWindowRect().width;
    let scrollY = driver.getWindowRect().height * 0.3;
    await browser.touchAction([
      { action: "press", x: 0, y: scrollY },
      { action: "moveTo", x: -3600, y: scrollY },
      "release",
    ]);
  }

  static async scrollVideo() {
    let scrollX = driver.getWindowRect().width;
    let scrollY = driver.getWindowRect().height * 0.85;
    await browser.touchAction([
      { action: "press", x: 0, y: scrollY },
      { action: "moveTo", x: -3600, y: scrollY },
      "release",
    ]);
  }

  static async touchTopleft() {
    await browser.touchAction([{ action: "press", x: 100, y: 100 }, "release"]);
  }

  static async getDeviceSize() {
    return await driver.getWindowSize();
  }

  static async touchTopleftXBtn() {
    // console.log(await this.getDeviceSize())
    this.pause(1);
    browser.touchAction([{ action: "press", x: 50, y: 50 }, "release"]);
  }

  static async touchTopRight() {
    console.log(await this.getDeviceSize());
    ActionHelper.pause(1);
    await browser.touchAction([
      {
        action: "press",
        x: 1000,
        y: 100,
      },
      "release",
    ]);
  }

  static getPageSource() {
    return driver.getPageSource();
  }

  static async openChrome() {
    await browser
      .$('//android.widget.TextView[@content-desc="Chrome"]')
      .click();
  }

  static openSafari() {
    browser.$('//XCUIElementTypeIcon[@name="Safari"]').click();
  }

  static hideKeyboard() {
    driver.hideKeyboard();
  }

  static async swipeDown() {
    await browser.touchAction([
      { action: "press", x: 1000, y: 800 },
      { action: "moveTo", x: 1000, y: 1000 },
      "release",
    ]);
  }

  static async swipeVertical(navigation) {
    const m = await driver.getWindowSize();
    console.log(m);
    const mb = 100;
    const from = {};
    const to = {};

    switch (navigation) {
      case "up":
        from.width = m.width / 2;
        from.height = m.height - mb;
        to.height = 500;
        to.width = m.width / 2;
        break;
      default:
        break;
    }

    driver.touchPerform([
      {
        action: "press",
        options: {
          x: from["width"],
          y: from["height"],
        },
      },
      {
        action: "wait",
        options: { ms: 1000 },
      },
      {
        action: "moveTo",
        options: {
          x: to["width"],
          y: to["height"],
        },
      },
      {
        action: "release",
        options: {},
      },
    ]);
  }

  static randomNumber(length) {
    return Math.random().toString().slice(2, 12).repeat(1000).slice(0, length);
  }
}

module.exports = ActionHelper;
