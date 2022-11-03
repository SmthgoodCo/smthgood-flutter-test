const { WebDriverAgent } = require('appium-webdriveragent')
const ActionHelper = require('../helpers/actionHelpers')
const BasePage = require('./base.page')
require('chai').should()

class CartPage extends BasePage {
  getObjectLocator() {
    const platform = browser.capabilities.platformName.toLowerCase()
    return require(`./../screens/native/${platform}/cart.screen.js`)
  }

  async removeProductInCart() {
    const el = await this.getObjectLocator().minusButton
    await this.clickCart()
    if ((await ActionHelper.isVisible(el))) {
      await ActionHelper.click(el)
      await this.clickButtonOnScreen('REMOVE')
      await ActionHelper.pause(2)
    }
  }

  async verifyProductNotDisplayed() {
    const el = await this.getObjectLocator().minusButton
    await ActionHelper.waitForNotElement(el)
  }

  async clickAddToCart() {
    const el = await this.getObjectLocator().addToCartButton
    await ActionHelper.waitForElement(el)
    await ActionHelper.click(el)
  }

  async clickBack() {
    const el = await this.getObjectLocator().backButton
    await ActionHelper.waitForElement(el)
    await ActionHelper.click(el)
  }

  async clickOrderPlace() {
    const el = await this.getObjectLocator().placeOderButton
    await ActionHelper.waitForNotElement(await this.getSelector().buttonOnScreen.replace('%s', 'CHECKOUT'))
    ActionHelper.swipeVertical('up')
    await ActionHelper.waitForElement(el)
    await ActionHelper.click(el)
    await ActionHelper.waitForNotElement(await this.getObjectLocator().placeOderButton)
  }

  async orderIsPlacedMessage(text) {
    const el = await this.getObjectLocator().oderPlacedMsg.replace('%s', text);
    await ActionHelper.waitForElement(el);
    await this.verifyButtonDisplay('CONTINUE SHOPPING')
  }
}

module.exports = CartPage
