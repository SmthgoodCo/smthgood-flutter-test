Feature: Register

  @androidApp
  Scenario: Verify enter new email
    Given I launch and Open SmtGood Android app
    And I click 'Log in/Sign up here!' button
    When I enter a random email
    And I click 'CONTINUE' button
    Then I can see the text is 'Hello stranger'

  @androidApp
  Scenario: Verify doesn’t enter data, show message
    Given I click 'NEXT' button
    Then I can see the text is 'Your name is invalid'

  @androidApp
  Scenario: Verify enter data more than 25 character, show message
    Given I click 'Your name' and enter 26 character
    When I click 'NEXT' button
    Then I can see the text is 'Enter a name under 25 character'

  @androidApp
  Scenario: Verify enter data less than 25 character, show “Sign up username” screen
    Given I enter 'name test'
    When I click 'NEXT' button
    Then I can see the text is 'Create a username'

  @androidApp
  Scenario: Verify does not enter value, show message
    Given I enter ''
    When I click 'NEXT' button
    Then I can see the text is 'Username is invalid'

  @androidApp
  Scenario: Verify does not enter value, show message
    Given I enter 'as'
    When I click 'NEXT' button
    Then I can not see the text is 'Create a password'

  @androidApp
  Scenario: Verify enter start with a dot character, show message
    Given I enter '.a1'
    When I click 'NEXT' button
    Then I can not see the text is 'Create a password'

  @androidApp
  Scenario: Verify enter end with a dot character, show message
    Given I enter 'a1.'
    When I click 'NEXT' button
    Then I can not see the text is 'Create a password'

  @androidApp
  Scenario: Verify enter start with underline character, show message
    Given I enter '_a1'
    When I click 'NEXT' button
    Then I can not see the text is 'Create a password'

  @androidApp
  Scenario: Verify enter end with underline character, show message
    Given I enter 'a1_'
    When I click 'NEXT' button
    Then I can not see the text is 'Create a password'

  @androidApp
  Scenario: Verify enter have two or more consecutive dots in a row, show message
    Given I enter 'a..a'
    When I click 'NEXT' button
    Then I can not see the text is 'Create a password'

  @androidApp
  Scenario: Verify enter more than 30 characters, show message
    Given I click 'Username' and enter 31 character
    When I click 'NEXT' button
    Then I can not see the text is 'Create a password'

  @androidApp
  Scenario: Verify enter valid value but user exist in system, show message
    Given I enter 'quocbao'
    When I click 'NEXT' button
    Then I can see the text is 'This username is already taken, try another.'

  @androidApp
  Scenario: Verify enter with 30 characters, show “create password” screen
    Given I click 'Username' and enter 30 character
    When I click 'NEXT' button
    Then I can see the text is 'Create a password'
    When I click back

  @androidApp
  Scenario: Verify enter with 3 characters, show “create password” screen
    Given I enter 'Rol'
    When I click 'NEXT' button
    Then I can see the text is 'Create a password'
    When I click back

  @androidApp
  Scenario: Verify enter with 9 characters with a dot character, show “create password” screen
    Given I click 'Username' and enter 9 character
    When I click 'NEXT' button
    Then I can see the text is 'Create a password'

  @androidApp
  Scenario: Verify does not enter value, show message
    Given I enter ''
    When I click 'NEXT' button
    Then I can see the text is 'Please enter your password'

  @androidApp
  Scenario: Verify enter data less than 8 characters, show message
    Given I click 'Password' and enter 7 character
    When I click 'NEXT' button
    Then I can see the text is 'At least 8 characters and no spaces'

  @androidApp
  Scenario: Verify enter data with 8 characters & enter password again less than 8 characters, show message
    Given I click 'Password' and enter 8 character
    And I click 'Enter password again' and enter 7 character
    When I click 'NEXT' button
    Then I can see the text is 'At least 8 characters and no spaces'

  @androidApp
  Scenario: Verify user enter data with 8 characters & enter password again don’t enter data, show message
    Given I click 'Password' and enter 8 character
    And I click 'Enter password again' and enter 0 character
    When I click 'NEXT' button
    Then I can see the text is 'Please re-enter your password'

  @androidApp
  Scenario: Verify enter data with 8 characters & enter password again enter more than 8 characters
    Given I click 'Password' and enter 8 character
    And I click 'Enter password again' and enter 10 character
    When I click 'NEXT' button
    Then I can see the text is 'The passwords do not match, please check and try again'

  @androidApp
  Scenario: Verify enter data for Password is 8 characters & Enter password again as same as the password, show "Onboarding Quiz" screen
    Given I click 'Password' and enter 'password'
    And I click 'Enter password again' and enter 'password'
    When I click 'NEXT' button
    Then I can see 'START' button

  @androidApp
  Scenario: Verify click “skip” at the “Express your individuality” screen, show “Skipped our quiz for now” screen
    Given I click 'Skip' button
    Then I can see the text is 'Skipped our'
    And I can see the text is 'quiz for now?'

  @androidApp
  Scenario: Verify skip tutorial, show “Homepage” & turn off the guide
    Given I click 'NEXT' button
    When I click 'Skip' button
    And I click skip tutorial
    Then I can not see the text is 'Start shopping the newest arrivals and more.'
