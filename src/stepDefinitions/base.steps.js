const { Given, When, Then } = require('@cucumber/cucumber')
const ActionHelper = require('../helpers/actionHelpers')
const BasePage = require('../pages/base.page')
const basePage = new BasePage()

Then('I can see {string} button', async (text) => {
  console.log(`I can see ${text} button`)
  await basePage.verifyButtonDisplay(text)
})

When('I click {string} button', async (button) => {
  console.log(`I click ${button} button`)
  await basePage.clickButtonOnScreen(button)
})

When('I enter {string}', async (text) => {
  console.log(`I enter ${text}`)
  await basePage.enterText(text)
})

When('I enter a random email', async () => {
  console.log(`I enter a random email`)
  await basePage.enterText(`test_${ActionHelper.randomNumber(5)}@gmail.com`)
})

Then('I can see the text is {string}', async (text) => {
  console.log(`I can see the text is ${text}`)
  await basePage.verifyTextIsDisplayed(text)
})

Then('I can not see the text is {string}', async (text) => {
  console.log(`I can not see the text is ${text}`)
  await basePage.verifyTextIsNotDisplayed(text)
})

When('I click back', async () => {
  console.log(`I click Back`)
  await basePage.clickBack()
})

When('I click on the text is {string}', async (text) => {
  console.log(`I click on the text is ${text}`)
  await basePage.clickTextOnScreen(text)
})

When('I click on the image with index {int}', async (text) => {
  console.log(`I click ${text} the image`)
  await basePage.clickImageOnScreen(text)
})

When('I swipe vertical', async () => {
  console.log(`I swipe vertical`)
  await ActionHelper.swipeVertical('up')
})

When('I click on the title is {string}', async (text) => {
  console.log(`I click on the title is ${text}`)
  await basePage.clickItemOnScreen(text)
})
