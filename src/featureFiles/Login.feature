Feature: Login

  @androidApp
  Scenario: Lauch and Open SmtGood Android app
    Given I launch and Open SmtGood Android app
  Then I can see 'CONTINUE' button

  @androidApp
  Scenario: Verify input invalid email
    Given I enter 'Test1'
    When I click 'CONTINUE' button
    Then I can see the text is 'Email invalid, please type your email address'

  @androidApp
  Scenario: Verify not enter email
    Given I enter ''
    When I click 'CONTINUE' button
    Then I can see the text is 'Please enter your email'

  @androidApp
  Scenario: Verify enter valid email
    Given I enter 'baoquoc+automation@smthgoodco.com'
    When I click 'CONTINUE' button
    Then I can see the text is 'Enter your password'
    When I click back
    And I enter 'test@gmail.com'
    When I click 'CONTINUE' button
    Then I can see the text is 'Hello stranger'
    Then I can see 'NEXT' button
    When I click back

  @androidApp
  Scenario: Verify click 'click here' hyperlink
    Given I click "click here" hypelink
    Then I can see Accept Cookies

