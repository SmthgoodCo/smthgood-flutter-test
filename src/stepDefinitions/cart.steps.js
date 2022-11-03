const { Given, When, Then } = require("@cucumber/cucumber");
const CartPage = require("../pages/cart.page");
const cart = new CartPage();

Given("I click add to cart", async () => {
  console.log(`I click add to Cart`);
  await cart.clickAddToCart();
});

When("I click Order Place", async () => {
  console.log(`I click Order Place`);
  await cart.clickOrderPlace();
});

When("I click Back", async () => {
  console.log(`I click Back`);
  await cart.clickBack();
});

Then("I can see {string} message", async (text) => {
  console.log(`I can see ${text} message`);
  await cart.orderIsPlacedMessage(text);
});

Given("I remove all product in cart", async () => {
  console.log(`I remove all product in cart`);
  await cart.removeProductInCart();
});

Then("I should not see the product in cart", async () => {
  console.log(`I should not see the product in cart`);
  await cart.verifyProductNotDisplayed();
});


