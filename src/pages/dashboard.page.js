const { WebDriverAgent } = require('appium-webdriveragent')
const ActionHelper = require('../helpers/actionHelpers')
const BasePage = require('./base.page')
require('chai').should()

class DashboardPage extends BasePage {
  getObjectLocator() {
    const platform = browser.capabilities.platformName.toLowerCase()
    return require(`./../screens/native/${platform}/dashboard.screen.js`)
  }

  async launchApp() {
    await ActionHelper.launchApp()
    await ActionHelper.switchToNativeContext()
  }

  async clickSkipTutorial() {
    const el = this.getObjectLocator().skipTutorialButton
    await ActionHelper.checkLocatorExist(el, ActionHelper.click(el))
  }

  async clickOkButton() {
    const el = this.getSelector().buttonOnScreen.replace('%s', 'OK')
    await ActionHelper.checkLocatorExist(el, ActionHelper.click(el))
  }

  async clickCart() {
    const el = this.getObjectLocator().cartIcon
    await ActionHelper.waitForElement(el)
    await ActionHelper.click(el)
    await ActionHelper.pause(2)
  }

  async removeProductInCart() {
    await this.clickCart()
    if ((await ActionHelper.isVisible(this.getObjectLocator().minusButton))) {
      await ActionHelper.click(this.getObjectLocator().minusButton)
      await this.clickButtonOnScreen('REMOVE')
      await ActionHelper.waitForNotElement(this.getObjectLocator().minusButton)
      await ActionHelper.click(this.getObjectLocator().backButton)
    } else {
      await ActionHelper.click(this.getObjectLocator().backButton)
    }
  }

  async selectSection(section) {
    const el = this.getObjectLocator().sectionOnDashboard.replace('%s', section)
    await ActionHelper.waitForElement(el)
    await ActionHelper.click(el)
  }

  async searchProduct(text) {
    const el = this.getObjectLocator().searchProductField
    await ActionHelper.sendText(el, text);
  }

  async selectProduct(text) {
    const el = this.getObjectLocator().productName.replace('%s', text)
    await ActionHelper.waitForElement(el)
    await ActionHelper.click(el)
  }

  async clickAddToCart() {
    const el = this.getObjectLocator().addToCartButton
    await ActionHelper.waitForElement(el)
    await ActionHelper.click(el)
    await ActionHelper.pause(3)
  }

  async clickOrderPlace() {
    const el = this.getObjectLocator().placeOderButton
    ActionHelper.swipeVertical('up')
    await ActionHelper.waitForElement(el)
    await ActionHelper.click(el)
  }
}

module.exports = DashboardPage
