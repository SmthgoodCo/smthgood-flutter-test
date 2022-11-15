Feature: Quiz

  @androidApp
  Scenario: Verify click “Start” at the “Express your individuality” screen, show “Question 1/6” screen
    Given I launch and Open SmtGood Android app
    And I click 'Log in/Sign up here!' button
    When I register a new user
    And I click 'START' button
    Then I can see the text is 'QUESTION 1/6'

  @androidApp
  Scenario: Verify doesn’t select option, the “Next” button is disable
    Given I click 'NEXT' button
    Then I can not see the text is 'QUESTION 2/6'

  @androidApp
  Scenario: Verify select option & click “next” button, show quesion 2/6 screen
    Given I click on the text is 'Confident'
    And I click on the text is 'Loyal'
    And I click on the text is 'Lively'
    And I click on the text is 'Mysterious'
    When I click 'NEXT' button
    Then I can see the text is 'QUESTION 2/6'

  @androidApp
  Scenario: Verify select back question, show question 1/6 screen
    Given I click back
    Then I can see the text is 'QUESTION 1/6'

  @androidApp
  Scenario: Verify select skip question, show question 2/6 screen
    Given I click 'Skip' button
    Then I can see the text is 'QUESTION 2/6'

  @androidApp
  Scenario: Verify doesn’t select option, the “Next” button is disable
    Given I click 'NEXT' button
    Then I can not see the text is 'QUESTION 3/6'

  @androidApp
  Scenario: Verify select option, the “Next” button is enable
    Given I click on the title is 'Revel in an indie concert and street art festival'
    And I click on the title is 'Attend the launch of a new architecture exhibition'
    When I click 'NEXT' button
    Then I can see the text is 'QUESTION 3/6'

  @androidApp
  Scenario: Verify select back question, show question 1/6 screen
    Given I click back
    Then I can see the text is 'QUESTION 2/6'

  @androidApp
  Scenario: Verify select skip question, show question 3/6 screen
    Given I click 'Skip' button
    Then I can see the text is 'QUESTION 3/6'

  @androidApp
  Scenario: Verify doesn’t select option, the “Next” button is disable
    Given I click 'NEXT' button
    Then I can not see the text is 'QUESTION 4/6'

  @androidApp
  Scenario: Verify select option, the “Next” button is enable
    Given I click on the title is 'Santorini, Greece'
    And I click on the title is 'Tokyo, Japan'
    When I click 'NEXT' button
    Then I can see the text is 'QUESTION 4/6'

  @androidApp
  Scenario: Verify select back question, show question 3/6 screen
    Given I click back
    Then I can see the text is 'QUESTION 3/6'

  @androidApp
  Scenario: Verify select skip question, show question 4/6 screen
    Given I click 'Skip' button
    Then I can see the text is 'QUESTION 4/6'

