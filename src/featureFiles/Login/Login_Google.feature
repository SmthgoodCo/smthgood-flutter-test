Feature: Login with Google

  @androidApp
  Scenario: Verify  click "Google" icon, show popup login account Google
    Given I launch and Open SmtGood Android app
    And I click 'Log in/Sign up here!' button
    When I click google icon
    And I sign in google account
    Then I can see 'JUST FOR YOU' section on homepage

