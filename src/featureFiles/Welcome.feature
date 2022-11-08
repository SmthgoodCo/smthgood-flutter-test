Feature: Welcome Screen

  @androidApp
  Scenario: Lauch and Open SmtGood Android app
    Given I launch and Open SmtGood Android app
    Then I can see 'CONTINUE' Button

  @androidApp
  Scenario: Login with email
    Given I enter 'baoquoc+automation@smthgoodco.com'
    When I click 'CONTINUE'
    When I enter 'Abcd123!@#'
    When I click 'SIGN IN'
    Then I can see 'JUST FOR YOU' section on dashboard

  @androidApp
  Scenario: Remove product in cart
    Given I remove all product in cart
    Then I should not see the product in cart
    When I click Back

  @androidApp
  Scenario: Select a product
    Given I select 'JUST FOR YOU' on dashboard
    When I search "tets"
    When I select "tets"
    Then I can see "tets" information

  @androidApp
  Scenario: Click add to cart button
    Given I click add to cart
    When I click cart
    Then I can see product added in cart

  @androidApp
  Scenario: Click checkout button
    Given I click 'CHECKOUT'
    When I click Order Place
    Then I can see 'Look out for the order confirmation in your email. You can also check on your order status anytime here in the app.' message


