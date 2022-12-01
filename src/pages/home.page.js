const { WebDriverAgent } = require('appium-webdriveragent')
const ActionHelper = require('../helpers/actionHelpers')
const BasePage = require('./base.page')
require('chai').should()

class HomePage extends BasePage {
  getObjectLocator() {
    const platform = browser.capabilities.platformName.toLowerCase()
    return require(`./../screens/native/${platform}/home.screen.js`)
  }

  nextGuideBtn = async (text, i) => `//android.view.View[contains(@content-desc, "${text}")]/following-sibling::android.widget.ImageView[@index="${i}"]`

  async launchApp() {
    await ActionHelper.launchApp()
    await ActionHelper.switchToNativeContext()
  }

  async clickSkipTutorial() {
    const el = await this.getObjectLocator().skipTutorialButton;
    await ActionHelper.waitForElement(el);
    await ActionHelper.click(el);
  }

  async clickOkButton() {
    const el = await this.getSelector().buttonOnScreen.replace('%s', 'OK');
    await ActionHelper.waitForElement(el);
    await ActionHelper.click(el)
  }

  async selectSection(section) {
    const el = await this.getObjectLocator().sectionOnHomePage.replace('%s', section)
    await ActionHelper.waitForElement(el)
    await ActionHelper.click(el)
  }

  async searchProduct(text) {
    const el = await this.getObjectLocator().searchProductField
    await ActionHelper.waitForElement(el)
    await ActionHelper.sendText(el, text)
  }

  async selectProduct(text) {
    const el = await this.getSelector().itemOnScreen.replace('%s', text)
    await ActionHelper.waitForElement(el)
    await ActionHelper.click(el)
  }

  async verifyProductInformation(product) {
    const el = await this.getSelector().textOnScreen.replace('%s', product)
    await ActionHelper.waitForElement(el)
      (await ActionHelper.isVisible(el)).should.true;
  }

  async clickNextGuide(text, i) {
    const el = await this.nextGuideBtn(text, i)
    await ActionHelper.waitForElement(el)
    await ActionHelper.click(el)
  }

  async clickCreateLookBook() {
    const el = await this.getObjectLocator().createLookBookBtn
    await ActionHelper.waitForElement(el)
    await ActionHelper.click(el)
  }
}

module.exports = HomePage
