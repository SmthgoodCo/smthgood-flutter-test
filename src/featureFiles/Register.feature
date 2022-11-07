Feature: Register

  @androidApp
  Scenario: Lauch and Open SmtGood Android app
    Given I launch and Open SmtGood Android app
    Then I can see 'CONTINUE' button
    When I enter 'test@gmail.com'
    And I click 'CONTINUE' button

  @androidApp
  Scenario: Verify doesn’t enter data, show message
    Given I click 'NEXT' button
    Then I can see the text is 'Your name is invalid'

  @androidApp
  Scenario: Verify enter data more than 25 character, show message
    Given I enter data with 26 character
    When I click 'NEXT' button
    Then I can see the text is 'Enter a name under 25 character'

  # @androidApp
  # Scenario: Verify enter data with 25 character, show “Sign up username” screen
  #   Given I enter data with 25 character
  #   When I click 'NEXT' button
  #   Then I can see the text is 'Create a username'

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
    Given I enter data with 31 character
    When I click 'NEXT' button
    Then I can not see the text is 'Create a password'

  @androidApp
  Scenario: Verify enter valid value but user exist in system, show message
    Given I enter 'quocbao'
    When I click 'NEXT' button
    Then I can not see the text is 'Create a password'

  @androidApp
  Scenario: Verify enter with 30 characters, show “create password” screen
    Given I enter data with 30 character
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
    Given I enter 'Rolex.1993'
    When I click 'NEXT' button
    Then I can see the text is 'Create a password'

  @androidApp
  Scenario: Verify does not enter value, show message
    Given I enter ''
    When I click 'NEXT' button
    Then I can see the text is 'Please enter your password'

  @androidApp
  Scenario: Verify enter data less than 8 characters, show message
    Given I enter data with 7 character
    When I click 'NEXT' button
    Then I can see the text is 'At least 8 characters and no spaces'
