const { WebDriverAgent } = require('appium-webdriveragent')
const ActionHelper = require('../helpers/actionHelpers')
const BasePage = require('./base.page')
const userData = require('../testData/user.json')
require('chai').should()

class WelcomePage extends BasePage {
  getObjectLocator() {
    const platform = browser.capabilities.platformName.toLowerCase()
    return require(`./../screens/native/${platform}/welcome.screen.js`)
  }

  async launchApp() {
    await ActionHelper.launchApp()
    await ActionHelper.switchToNativeContext()
  }

  launchAppiOS() {
    ActionHelper.launchApp()
    ActionHelper.switchToNativeContext()
  }

  async loginWithEmail() {
    await this.enterText(userData.valid.email)
    await this.clickButtonOnScreen('CONTINUE')
    await this.enterText(userData.valid.password)
    await this.clickButtonOnScreen('SIGN IN')
  }

  async clickHere() {
    const el = await this.getSelector().textOnScreen.replace('%s', 'click here')
    await ActionHelper.swipeVertical('up')
    await ActionHelper.waitForElement(el)
    await ActionHelper.click(el)
  }

  async verifyAcceptCookies() {
    const el = await this.getObjectLocator().buttonOnScreen.replace('%s', 'ACCEPT COOKIES')
    await ActionHelper.waitForElement(el)
  }

  async enterMultipleValue(field, value) {
    const el = await this.getObjectLocator().textField.replace('%s', field)
    await ActionHelper.waitForElement(el)
    await ActionHelper.sendText(el, ActionHelper.randomNumber(value))
  }

  async enterValue(field, value) {
    const el = await this.getObjectLocator().textField.replace('%s', field)
    await ActionHelper.waitForElement(el)
    await ActionHelper.sendText(el, value)
  }

  async verifyValueInTextField(value) {
    const el = await this.getObjectLocator().textField.replace('%s', value)
    await ActionHelper.waitForElement(el)
  }
}

module.exports = WelcomePage
