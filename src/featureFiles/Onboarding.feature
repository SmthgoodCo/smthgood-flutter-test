Feature: Onboarding

  @androidApp
  Scenario: Verify first login to Homepage, show “Homepage” guide
    Given I launch and Open SmtGood Android app
    And I click 'Log in/Sign up here!' button
    When I register a new user
    And I click 'Skip' button
    And I click 'NEXT' button
    And I click 'Skip' button
    Then I can see the text is 'Homepage'

  @androidApp
  Scenario: Verify click next button of Homepage guide, show “View Lookbooks” guide
    Given I click next at 'Homepage' with index 6
    Then I can see the text is 'View Lookbooks'

  @androidApp
  Scenario: Verify click next button of “View Lookbooks” guide, show “Create Lookbooks” guide
    Given I click next at 'View Lookbooks' with index 6
    Then I can see the text is 'Create Lookbooks'

  @androidApp
  Scenario: Verify click next button of “Create Lookbooks” guide, show “Messages” guide
    Given I click next at 'Create Lookbooks' with index 6
    Then I can see the text is 'Messages'

  @androidApp
  Scenario: Verify click next button of “Messages” guide, show “Your Account” guide
    Given I click next at 'Messages' with index 5
    Then I can see the text is 'Your Account'

  @androidApp
  Scenario: Verify click next button of “Your Account” guide, show Homepage
    Given I click next at 'Your Account' with index 5
    Then I can not see the text is 'Your Account'
