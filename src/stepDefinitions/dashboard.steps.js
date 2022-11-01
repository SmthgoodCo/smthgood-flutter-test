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

Given("I select {string} on dashboard", async (section) => {
  console.log(`I select ${section}`);
  await dashboard.selectSection(section);
});

When("I search {string}", async (section) => {
  console.log(`I select ${section}`);
  await dashboard.searchProduct(section);
});

When("I click OK", async () => {
  console.log(`I click OK`);
  await dashboard.clickOkButton();
});

When("I select {string}", async (product) => {
  console.log(`I select ${product}`);
  await dashboard.selectProduct(product);
});

When("I click cart", async () => {
  console.log(`I click cart`);
  await dashboard.clickCart();
});

When("I click add to cart", async () => {
  console.log(`I click add to Cart`);
  await dashboard.clickAddToCart();
});

When("I click Order Place", async () => {
  console.log(`I click Order Place`);
  await dashboard.clickOrderPlace();
});

When("I remove all product in cart", async () => {
  console.log(`I remove all product in cart`);
  await dashboard.removeProductInCart();
});


