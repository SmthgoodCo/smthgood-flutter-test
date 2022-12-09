Feature: Create New LookBook

  @androidApp
  Scenario: Verify click Create Lookbook at the homepage, show “New Lookbook” screen
    Given I launch and Open SmtGood Android app
    And I click 'Log in/Sign up here!' button
    When I register a new user
    And I click 'Skip' button
    And I click 'NEXT' button
    And I click 'Skip' button
    And I click skip tutorial
    And I click create LookBook
    Then I can see the text is 'NEW LOOKBOOK'

  @androidApp
  Scenario: Verify click “Blank canvas” button, show “Lookbook” guide
    Given I click on the title is 'Blank canvas'
    Then I can see the text is 'Create a lookbook'

  @androidApp
  Scenario: Verify click next at the “Create a lookbook” screen, Show “Products” guide
    Given I click next at 'Create a lookbook' with index 5
    Then I can see the text is 'Click to add products found on smthgood platform. Your Lookbook must contain at least 2 smthgood products.'

  @androidApp
  Scenario: Verify click next at the “Products” screen, Show “My Items”  guide
    Given I click next at 'Products' with index 6
    Then I can see the text is 'Click to add smthgood items you liked and saved.'

  @androidApp
  Scenario: Verify click next at the “My items” screen, Show “Upload” guide
    Given I click next at 'My Items' with index 6
    Then I can see the text is 'Click to upload a photo from your phone. If your photo is a fashion product, you can add up to 7 non smthgood products. If your photo is a non fashion product, there are no restrictions to how many you can add.'

  @androidApp
  Scenario: Verify click next at the “Upload” screen, Show “Elements” guide
    Given I click next at 'Upload' with index 6
    Then I can see the text is 'Click to add different embellishments such as GIFs, stickers and other graphics. There are no restrictions to how many you can add.'

  @androidApp
  Scenario: Verify click next at the “Elements” screen, Show “Type” guide
    Given I click next at 'Click to add different' with index 4
    Then I can see the text is 'Click here to add text, change fonts and size of your fonts.'

  @androidApp
  Scenario: Verify click next at the “Type” screen, Show “Templates” guide
    Given I click next at 'add text' with index 6
    Then I can see the text is 'Click to add Lookbook templates.'

  @androidApp
  Scenario: Verify click next at the “Templates” screen, Show “Background” guide
    Given I click next at 'templates' with index 4
    Then I can see the text is 'Click to change your Lookbook background. You can select different colors and designs.'

  @androidApp
  Scenario: Verify click next at the “Background” screen, Show “Save draft” guide
    Given I click next at 'Lookbook background' with index 4
    Then I can see the text is 'Click here to save your drafts. You can come back to edit later!'

  @androidApp
  Scenario: Verify click next at the “Save draft” screen, Show “Download” guide
    Given I click next at 'drafts' with index 4
    Then I can see the text is 'Click here to download your Lookbook.'

  @androidApp
  Scenario: Verify click next at the “Download” screen, Show “Getting started” popup
    Given I click next at 'download' with index 4
    When I click next at 'Lookbook' with index 4
    Then I can see the text is 'GETTING STARTED?'

  @androidApp
  Scenario: Verify click OK at the “Getting started” Popup, Show “Lookbook editor” screen
    Given I click 'OK' button
    Then I can not see the text is 'GETTING STARTED?'

  @androidApp
  Scenario: Verify click “Blank canvas” button for the second time or more, Show “Lookbook Editor” screen
    Given I click back
    And I click create LookBook
    When I click on the title is 'Blank canvas'
    Then I can see the text is 'GETTING STARTED?'
    When I click 'OK' button

  @androidApp
  Scenario: Verify click “Templates” button for the second time or more, show “Templates” screen
    Given I click back
    And I click create LookBook
    When I click on the title is 'Template'
    And I click 'OK' button
    Then I can see the text is 'TEMPLATES'
    And I can see the title is 'ELEGANT CHIC'
    And I can see the title is 'MINIMALIST VOGUE'
    And I can see the title is 'STRIKING & BOLD'
    When I close 'TEMPLATES' popup

  @androidApp
  Scenario: Verify click “Draft Lookbooks” button, show Draft Lookbooks screen
    Given I click back
    And I click create LookBook
    When I click on the title is 'Draft Lookbooks'
    Then I can see the text is 'DRAFT LOOKBOOKS'

  @androidApp
  Scenario: Verify  click “Start Fresh” button at the Draft Lookbooks screen, show “Lookbook Editor” screen
    Given I click 'START FRESH' button
    When I click 'OK' button
    Then I can see the title is 'Products'
    And I can see the title is 'My Items'
    And I can see the title is 'Upload'
    And I can see the title is 'Elements'
    And I can see the title is 'Type'
    When I click back

  @androidApp
  Scenario: Verify click “x” button at the New Lookbook screen, show Homepage
    Given I click back
    And I click create LookBook
    When I close 'NEW LOOKBOOK' popup
    And I can not see the text is 'NEW LOOKBOOK'
