Feature: Login with Email

  @androidApp
  Scenario: Lauch and Open SmtGood Android app
    Given I launch and Open SmtGood Android app
    Then I can see the text is 'smthgood!'

  @androidApp
  Scenario: Verify input invalid email
    Given I click 'Log in/Sign up here!' button
    When I enter 'Test1'
    And I click 'CONTINUE' button
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

  @androidApp
  Scenario: Verify does not enter value, show message
    Given I enter ''
    When I click 'SIGN IN' button
    Then I can see the text is 'Please enter your password'

  @androidApp
  Scenario: Verify enter data less than 8 characters, show message
    Given I enter 'passwor'
    When I click 'SIGN IN' button
    Then I can see the text is 'At least 8 characters and no spaces'

  @androidApp
  Scenario: Verify enter data is space character, show message
    Given I enter '   '
    When I click 'SIGN IN' button
    Then I can see the text is 'At least 8 characters and no spaces'

  @androidApp
  Scenario: Verify enter data 8 characters or more but it’s incorrect, show message
    Given I enter 'Abcd123!@'
    When I click 'SIGN IN' button
    Then I can see the text is 'Your password is incorrect'

  @androidApp
  Scenario: Verify enters the wrong password for the 5th time, show “forgot password” screen
    Given I enter 'Abcd123!@'
    When I click 'SIGN IN' button
    And I enter 'Abcd123!@'
    And I click 'SIGN IN' button
    And I enter 'Abcd123!@'
    And I click 'SIGN IN' button
    And I enter 'Abcd123!@'
    And I click 'SIGN IN' button
    Then I can see 'RESET PASSWORD' button

  @androidApp
  Scenario: Verify doesn’t enter data to “Your email” textbox and click “Reset password” button, show message
    Given I enter ''
    When I click 'RESET PASSWORD' button
    Then I can see the text is 'Please enter your email'

  @androidApp
  Scenario: Verify enter data wrong format email and click “Reset password” button, show message
    Given I enter 'test'
    When I click 'RESET PASSWORD' button
    Then I can see the text is 'Please enter a valid email address'

  @androidApp
  Scenario: Verify enter data valid email and click “Reset password” button, show “reset password link” screen
    Given I enter 'automation.smthgoodco@gmail.com'
    When I click 'RESET PASSWORD' button
    Then I can see the text is 'Check your inbox'

  @androidApp
  Scenario: Verify click “ok” button at the “Reset password link” screen, show “Enter password” screen
    Given I click 'OK!' button
    Then I can see the text is 'Enter your password'

  @androidApp
  Scenario: Verify enter data is correct, show “homepage” screen
    Given I enter 'Abcd123!@#'
    Then I can see '**********' in text field
    When I click 'SIGN IN' button
    Then I can see 'JUST FOR YOU' section on homepage
