Feature: Welcome Screen

  @androidApp
  Scenario: Lauch and Open SmtGood Android app
    Given I launch and Open SmtGood Android app
    Then I can see 'CONTINUE' button

  @androidApp
  Scenario: I login with valid account
    Given I login with valid account
    Then I can see 'JUST FOR YOU' section on homepage

  @androidApp
  Scenario: Remove product in cart
    Given I remove all product in cart
    Then I should not see the product in cart
    When I click back

  @androidApp
  Scenario: Select a product
    Given I select 'JUST FOR YOU' on homepage
    When I search "<name>"
    And  I select "<name>"
    Then I can see "<name>" information

    Examples: product
      | name                |
      | Áo Thun Dry Cổ Tròn |


  @androidApp
  Scenario: Click add to cart button
    Given I click add to cart
    When I click cart
    Then I can see product added in cart

  @androidApp
  Scenario: Click checkout button
    Given I click 'CHECKOUT' button
    When I click Order Place
    Then I can see the text is 'Look out for the order confirmation in your email. You can also check on your order status anytime here in the app.'


