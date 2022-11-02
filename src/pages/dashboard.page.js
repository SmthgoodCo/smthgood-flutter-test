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
    const el = await this.getObjectLocator().skipTutorialButton
    await ActionHelper.checkLocatorExist(el, ActionHelper.click(el))
  }

  async clickOkButton() {
    const el = await this.getSelector().buttonOnScreen.replace('%s', 'OK')
    await ActionHelper.checkLocatorExist(el, ActionHelper.click(el))
  }

  async clickCart() {
    const el = await this.getObjectLocator().cartIcon
    await ActionHelper.waitForElement(el)
    await ActionHelper.click(el)
    await ActionHelper.pause(3)
  }

  async removeProductInCart() {
    const el = await this.getObjectLocator().minusButton
    await this.clickCart()
    if ((await ActionHelper.isVisible(el))) {
      await ActionHelper.click(el)
      await this.clickButtonOnScreen('REMOVE')
      await ActionHelper.waitForNotElement(el)
      await ActionHelper.click(await this.getObjectLocator().backButton)
    } else {
      await ActionHelper.click(await this.getObjectLocator().backButton)
    }
  }

  async verifyProductDisplayed() {
    const el = await this.getObjectLocator().minusButton
    await ActionHelper.waitForNotElement(el)
  }

  async selectSection(section) {
    const el = await this.getObjectLocator().sectionOnDashboard.replace('%s', section)
    await ActionHelper.waitForElement(el)
    await ActionHelper.click(el)
  }

  async searchProduct(text) {
    const el = await this.getObjectLocator().searchProductField
    await ActionHelper.sendText(el, text);
  }

  async selectProduct(text) {
    const el = await this.getObjectLocator().productName.replace('%s', text)
    await ActionHelper.waitForElement(el)
    await ActionHelper.click(el);
    await ActionHelper.pause(3)
  }

  async verifyProductInformation(product) {
    const el = await this.getObjectLocator().productInformation.replace('%s', product)
    if ((await ActionHelper.isVisible(el))) {
      (await ActionHelper.isVisible(el)).should.true;
    }
  }

  async clickAddToCart() {
    const el = await this.getObjectLocator().addToCartButton
    await ActionHelper.waitForElement(el)
    await ActionHelper.click(el)
    await ActionHelper.pause(3)
  }

  async clickOrderPlace() {
    const el = await this.getObjectLocator().placeOderButton
    await ActionHelper.waitForNotElement(await this.getSelector().buttonOnScreen.replace('%s', 'CHECKOUT'))
    ActionHelper.swipeVertical('up')
    await ActionHelper.waitForElement(el)
    await ActionHelper.click(el)
    await ActionHelper.waitForNotElement(await this.getObjectLocator().placeOderButton)
  }

  async orderIsPlacedMessage() {
    const el = await this.getObjectLocator().oderPlacedMsg
    if ((await ActionHelper.isVisible(el))) {
      (await ActionHelper.isVisible(el)).should.true
    }
  }
}

module.exports = DashboardPage
