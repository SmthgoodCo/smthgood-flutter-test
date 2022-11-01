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
    # When I click OK
    Then I can see logo on dashboard

  @androidApp
  Scenario: Order a product
    Given I remove all product in cart
    When I select 'JUST FOR YOU' on dashboard
    When I search 'Ao dai'
    When I select 'Ao dai'
    When I click add to cart
    When I click cart
    When I click 'CHECKOUT'
    When I click Order Place


