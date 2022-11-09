const { Given, When, Then } = require('@cucumber/cucumber')
const HomePage = require('../pages/home.page')
const Home = new HomePage()

When('I click skip tutorial', async () => {
  console.log(`I click skip tutorial`)
  await Home.clickSkipTutorial()
})

Then('I can see {string} section on homepage', async (section) => {
  console.log(`I can see ${section} section on homepage`)
  await Home.verifySectionOnHomePage(section)
})

When('I select {string} on homepage', async (section) => {
  console.log(`I select ${section}`)
  await Home.selectSection(section)
})

When('I search {string}', async (text) => {
  console.log(`I search ${text}`)
  await Home.searchProduct(text)
})

When('I click OK', async () => {
  console.log(`I click OK`)
  await Home.clickOkButton()
})

When('I select {string}', async (product) => {
  console.log(`I select ${product}`)
  await Home.selectProduct(product)
})

Then('I can see {string} information', async (product) => {
  console.log(`I can see ${product} information`)
  await Home.verifyProductInformation(product)
})

Then('I can see product added in cart', async () => {
  console.log(`I can see product added in cart'`)
  await Home.verifyButtonDisplay('CHECKOUT')
})

When('I click cart', async () => {
  console.log(`I click cart`)
  await Home.clickCart()
})
