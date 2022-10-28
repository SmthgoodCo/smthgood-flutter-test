const { Given, When, Then } = require("@cucumber/cucumber");
const DashboardPage = require("../pages/dashboard.page");
const dashboard = new DashboardPage();

When("I click skip tutorial", async () => {
  console.log(`I click skip tutorial`);
  await dashboard.clickSkipTutorial();
});

Then("I can see logo on dashboard", async () => {
  console.log(`I can see logo on dashboard`);
  await dashboard.verifyLogoDisplay();
});


