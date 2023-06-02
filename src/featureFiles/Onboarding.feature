Feature: Onboarding

  @androidApp
  Scenario: Verify first login to Homepage, show “Homepage” guide
    Given I launch and Open SmtGood Android app
    When I click on the image with index 5
    And I click 'Sign up here!' button
    And I click 'Log in/Sign up here!' button
    And I skip the privacy popup
    And I login with email 'toanSmtgood_automation@gmail.com' and password 'automation123'

  @androidApp
  Scenario: Verify click next button of Homepage guide, show “View Lookbooks” guide
    Given I click menu bottom with index 3
    Then I can see the text is 'NEW LOOKBOOK'
    And I click close icon

  # @androidApp
  # Scenario: Verify click next button of “View Lookbooks” guide, show “Create Lookbooks” guide
  #   Given I click next at 'View Lookbooks' with index 6
  #   Then I can see the text is 'Create Lookbooks'

  # @androidApp
  # Scenario: Verify click next button of “Create Lookbooks” guide, show “Messages” guide
  #   Given I click next at 'Create Lookbooks' with index 6
  #   Then I can see the text is 'Messages'

  @androidApp
  Scenario: Verify click next button of “Messages” guide, show “Your Account” guide
    Given I click menu bottom with index 4
    Then I can see the text is 'MESSAGES'

  @androidApp
  Scenario: Verify click next button of “Your Account” guide
    Given I click menu bottom with index 5
    Then I can not see the text is 'Toan'
