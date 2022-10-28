const { default: $ } = require("webdriverio/build/commands/browser/$");
const { signInButton } = require("../screens/native/ios/welcome.screen");

const waitTimeInSeconds = 60000;
class ActionHelper {
  static launchBrowserUrl(urlToLaunch) {
    browser.url(urlToLaunch);
  }

  static getTitle() {
    return browser.getTitle();
  }

  static async launchApp() {
    await driver.launchApp();
  }

  static closeApp() {
    driver.closeApp();
  }

  static backgroundApp() {
    // driver.background(20);
    driver.pressKeyCode(3);
  }

  static async switchToNativeContext() {
    await browser.switchContext("NATIVE_APP");
  }

  static async pause(seconds) {
    await browser.pause(seconds * 1000);
  }

  static isVisible(locator) {
    return browser.$(locator).isDisplayed() ? true : false;
  }

  static async pressKeyCode(value) {
    await driver.pressKeyCode(value);
  }

  static async click(locator) {
    await browser.$(locator).click();
  }

  static async waitForElement(locator) {
    await browser.$(locator).waitForDisplayed({ waitTimeInSeconds });
  }

  static waitForNotElement(locator) {
    browser.$(locator).waitForDisplayed({ waitTimeInSeconds, reverse: true });
  }

  static clearText(locator) {
    browser.$(locator).clearValue();
  }

  static async sendText(locator, inputText) {
    await browser.$(locator).addValue(inputText);
  }

  static getText(locator) {
    return browser.$(locator).getText();
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
    // console.log(await this.getDeviceSize());
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

  static openChrome() {
    browser.$("//android.widget.TextView[@content-desc='Chrome']").click();
  }

  static openSafari() {
    browser.$('//XCUIElementTypeIcon[@name="Safari"]').click();
  }

  static hideKeyboard() {
    driver.hideKeyboard();
  }

  static swipeDown() {
    browser.touchAction([
      { action: "press", x: 250, y: 500 },
      { action: "moveTo", x: 250, y: 4500 },
      "release",
    ]);
  }
}

module.exports = ActionHelper;
