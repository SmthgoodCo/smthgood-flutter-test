const { Given, When, Then } = require("@cucumber/cucumber");
const WelcomePage = require("../pages/welcome.page");
const welcomePage = new WelcomePage();

Given("I launch and Open SmtGood Android app", async () => {
  console.log("Launch and Open SmtGood Android app");
  await welcomePage.launchApp();
});

Given("I launch and Open SmtGood iOS app", () => {
  console.log("Launch and Open SmtGood iOS app");
  welcomePage.launchAppiOS();
});

Then("I can see Button", async () => {
  console.log(`I can see Button`);
  await welcomePage.verifyButtonDisplay();
});

When("I click {string} Button", async (button) => {
  console.log(`I click ${button} Button`);
  await welcomePage.clickButtonOnScreen(button);
});

When("I enter {string}", async (text) => {
  console.log(`I enter ${text}`);
  await welcomePage.enterText(text);
});
