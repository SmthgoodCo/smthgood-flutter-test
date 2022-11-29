const { Given, When, Then } = require('@cucumber/cucumber')
const HomePage = require('../pages/home.page')
const home = new HomePage()

When('I click skip tutorial', async () => {
  console.log(`I click skip tutorial`)
  await home.clickSkipTutorial()
})

Then('I can see {string} section on homepage', async (section) => {
  console.log(`I can see ${section} section on homepage`)
  await home.verifySectionOnHomePage(section)
})

When('I select {string} on homepage', async (section) => {
  console.log(`I select ${section}`)
  await home.selectSection(section)
})

When('I search {string}', async (text) => {
  console.log(`I search ${text}`)
  await home.searchProduct(text)
})

When('I click OK', async () => {
  console.log(`I click OK`)
  await home.clickOkButton()
})

When('I select {string}', async (product) => {
  console.log(`I select ${product}`)
  await home.selectProduct(product)
})

Then('I can see {string} information', async (product) => {
  console.log(`I can see ${product} information`)
  await home.verifyProductInformation(product)
})

Then('I can see product added in cart', async () => {
  console.log(`I can see product added in cart'`)
  await home.verifyButtonDisplay('CHECKOUT')
})

When('I click cart', async () => {
  console.log(`I click cart`)
  await home.clickCart()
})

When('I click next at {string} with index {int}', async (text, i) => {
  console.log(`I click next ${text} with index ${i}`)
  await home.clickNextGuide(text, i)
})

When('I click create LookBook', async () => {
  console.log(`I click create LookBook`)
  await home.clickCreateLookBook()
})
