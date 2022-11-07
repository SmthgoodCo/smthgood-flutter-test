const { WebDriverAgent } = require('appium-webdriveragent')
const ActionHelper = require('../helpers/actionHelpers')
const BasePage = require('./base.page')
require('chai').should()

class HomePage extends BasePage {
  getObjectLocator() {
    const platform = browser.capabilities.platformName.toLowerCase()
    return require(`./../screens/native/${platform}/home.screen.js`)
  }

  async launchApp() {
    await ActionHelper.launchApp()
    await ActionHelper.switchToNativeContext()
  }

  async clickSkipTutorial() {
    const el = await this.getObjectLocator().skipTutorialButton
    await ActionHelper.checkLocatorExist(el, ActionHelper.click(el))
  }

  async clickOkButton() {
    const el = await this.getSelector().buttonOnScreen.replace('%s', 'OK')
    await ActionHelper.checkLocatorExist(el, ActionHelper.click(el))
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
    const el = await this.getObjectLocator().productName.replace('%s', text)
    await ActionHelper.waitForElement(el)
    await ActionHelper.click(el)
  }

  async verifyProductInformation(product) {
    const el = await this.getSelector().textOnScreen.replace('%s', product)
    await ActionHelper.waitForElement(el)
  }
}

module.exports = HomePage
