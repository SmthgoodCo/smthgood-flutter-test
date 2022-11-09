const { Given, When, Then } = require('@cucumber/cucumber')
const WelcomePage = require('../pages/welcome.page')
const welcomePage = new WelcomePage()

Given('I launch and Open SmtGood Android app', async () => {
  console.log('Launch and Open SmtGood Android app')
  await welcomePage.launchApp()
})

Given('I launch and Open SmtGood iOS app', () => {
  console.log('Launch and Open SmtGood iOS app')
  welcomePage.launchAppiOS()
})

Given('I login with valid account', async () => {
  console.log(`I login with valid account`)
  await welcomePage.loginWithEmail()
})

Given('I click "click here" hypelink', async () => {
  console.log(`I click "click here" hypelink`)
  await welcomePage.clickHere()
})

Then('I can see Accept Cookies', async () => {
  console.log(`I can see Accept Cookies`)
  await welcomePage.verifyAcceptCookies()
})
