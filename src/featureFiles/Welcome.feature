Feature: Welcome Screen

  @androidApp
  Scenario: Lauch and Open SmtGood Android app
    Given I launch and Open SmtGood Android app
    Then I can see Button
    When I enter "baoquoc+automation@smthgoodco.com"
    When I click 'CONTINUE' Button
    When I enter "Abcd123!@#"
    When I click 'SIGN IN' Button
    When I click 'OK' Button

# @iosApp
# Scenario: Lauch and Open SmtGood iOS  app
#   Given I launch and Open SmtGood iOS app
#   Then I can see Continue Button

