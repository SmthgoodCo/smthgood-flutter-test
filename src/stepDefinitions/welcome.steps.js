const { Given, When, Then } = require('@cucumber/cucumber')
const WelcomePage = require('../pages/welcome.page')
const ActionHelper = require("../helpers/actionHelpers");
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

When('I click your field and enter {int} character', async (value) => {
  console.log(`I click your field and enter ${value} character`)
  await welcomePage.enterMultipleValue(value)
})

When('I click password field and enter {int} character', async (value) => {
  console.log(`I click password field and enter ${value} character`)
  await welcomePage.enterPassword(ActionHelper.randomNumber(value))
})

When('I click repassword field and enter {int} character', async (value) => {
  console.log(`I click Your name field and enter ${value} character`)
  await welcomePage.enterRepassword(ActionHelper.randomNumber(value))
})

When('I click password field and enter {string}', async (value) => {
  console.log(`I click password field and enter ${value}`)
  await welcomePage.enterPassword(value)
})

When('I click repassword field and enter {string}', async (value) => {
  console.log(`I click reassword field and enter ${value}`)
  await welcomePage.enterRepassword(value)
})

When('I click {string} and enter {string}', async (field, value) => {
  console.log(`I click ${field} and enter ${value}`)
  await welcomePage.enterValueInTextField(field, value)
})

When('I register a new user', async () => {
  console.log(`I register a new user`)
  await welcomePage.registerNewUser()
}) 

When('I login with email {string} and password {string}', async (email, password) => {
  console.log(`I login with email ${email} and password ${password}`)
  await welcomePage.login(email, password)
})

When('I click google icon', async () => {
  console.log(`I click google icon`)
  await welcomePage.clickGoogleIcon()
})

When('I sign in google account', async () => {
  console.log(`I sign in google account`)
  await welcomePage.signInGoogleAccount()
})

When('I skip the privacy popup', async () => {
  console.log('I skip the privacy popup')
  await welcomePage.skipPrivacyPopup()
})

Then('I can see {string} in text field', async (value) => {
  console.log(`I can see ${value} in text field`)
  await welcomePage.verifyValueInTextField(value)
})
