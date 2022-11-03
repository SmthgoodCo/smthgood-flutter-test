const { Given, When, Then } = require("@cucumber/cucumber");
const DashboardPage = require("../pages/dashboard.page");
const dashboard = new DashboardPage();

When("I click skip tutorial", async () => {
  console.log(`I click skip tutorial`);
  await dashboard.clickSkipTutorial();
});

Then("I can see {string} section on dashboard", async (section) => {
  console.log(`I can see ${section} section on dashboard`);
  await dashboard.verifySectionOnDashboard(section);
});

When("I select {string} on dashboard", async (section) => {
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

Then("I can see {string} information", async (product) => {
  console.log(`I can see ${product} information`);
  await dashboard.verifyProductInformation(product);
});

Then("I can see {string} added in cart", async (product) => {
  console.log(`I can see ${product} added in cart"`);
  await dashboard.verifyProductInformation(product);
});

When("I click cart", async () => {
  console.log(`I click cart`);
  await dashboard.clickCart();
});

Given("I click add to cart", async () => {
  console.log(`I click add to Cart`);
  await dashboard.clickAddToCart();
});

When("I click Order Place", async () => {
  console.log(`I click Order Place`);
  await dashboard.clickOrderPlace();
});

Then("I can see oder is placed Message", async () => {
  console.log(`I can see oder is placed Message`);
  await dashboard.orderIsPlacedMessage();
});

Given("I remove all product in cart", async () => {
  console.log(`I remove all product in cart`);
  await dashboard.removeProductInCart();
});

Then("I should not see the product in cart", async () => {
  console.log(`I should not see the product in cart`);
  await dashboard.verifyProductDisplayed();
});


