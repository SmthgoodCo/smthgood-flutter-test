Feature: Welcome Screen

  @androidApp
  Scenario: Lauch and Open SmtGood Android app
    Given I launch and Open SmtGood Android app
    Then I can see 'CONTINUE' Button
    When I enter "baoquoc+automation@smthgoodco.com"
    When I click 'CONTINUE' Button
    When I enter "Abcd123!@#"
    When I click 'SIGN IN' Button
    When I click 'OK' Button

