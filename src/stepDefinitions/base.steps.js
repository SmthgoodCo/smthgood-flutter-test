const { Given, When, Then } = require('@cucumber/cucumber')
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
