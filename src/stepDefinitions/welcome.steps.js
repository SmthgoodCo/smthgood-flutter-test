const { Given, When, Then } = require("@cucumber/cucumber");
const WelcomePage = require("../pages/welcome.page");
const welcomePage = new WelcomePage();

Given("I launch and Open SmtGood Android app", () => {
  console.log("Launch and Open SmtGood Android app");
  welcomePage.launchApp();
});

Given("I launch and Open SmtGood iOS app", () => {
  console.log("Launch and Open SmtGood iOS app");
  welcomePage.launchAppiOS();
});

Then("I can see Continue Button", () => {
  console.log("I can see Continue Button");
  welcomePage.verifyContinueButtonDisplay();
});
