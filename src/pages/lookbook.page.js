const { WebDriverAgent } = require('appium-webdriveragent')
const ActionHelper = require('../helpers/actionHelpers')
const BasePage = require('./base.page')
const { default: $$ } = require('webdriverio/build/commands/browser/$$')
require('chai').should()

class LookBookPage extends BasePage {

  getObjectLocator() {
    const platform = browser.capabilities.platformName.toLowerCase()
    return require(`./../screens/native/${platform}/lookbook.screen.js`)
  }

  imageInItem = async (text, i) => `//android.view.View[@content-desc="${text}"]/../../android.view.View[2]//android.widget.ImageView[@index="${i}"]`

  async clickClose(title) {
    const el = await this.getObjectLocator().closeBtn.replace('%s', title)
    await ActionHelper.waitForElement(el)
    await ActionHelper.click(el)
  }

  async clickCamera() {
    const el = await this.getObjectLocator().cameraButton
    await ActionHelper.waitForElement(el)
    await ActionHelper.click(el)
  }

  async clickAllow() {
    const el = await this.getObjectLocator().allowButton
    await ActionHelper.waitForElement(el)
    await ActionHelper.click(el)
  }

  async clickDone() {
    const el = await this.getObjectLocator().doneButton
    await ActionHelper.waitForElement(el)
    await ActionHelper.click(el)
  }

  async imageUploaded(image) {
    await browser.pause(5000)
    const el = await this.getObjectLocator().imageUploaded
    await ActionHelper.waitForElement(el)
    await expect(browser.$$(el)).toHaveChildren(image)
  }

  async clickManySelect(item) {
    const el = await this.getObjectLocator().allowManySelectIcon.replace('%s', item);
    await ActionHelper.waitForElement(el)
    await ActionHelper.click(el)
  }

  async clickPlusButton() {
    const el = await this.getObjectLocator().plusButton;
    await ActionHelper.waitForElement(el)
    await ActionHelper.click(el)
  }

  async clickFavorite(product) {
    const el = await this.getObjectLocator().favoriteIcon.replace('%s', product);
    await ActionHelper.waitForElement(el)
    await ActionHelper.click(el)
  }

  async selectImageInItem(item, i) {
    const el = await this.imageInItem(item, i)
    await ActionHelper.waitForElement(el)
    await ActionHelper.click(el)
  }
}

module.exports = LookBookPage
