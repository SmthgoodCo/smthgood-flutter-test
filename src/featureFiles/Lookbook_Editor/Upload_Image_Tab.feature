Feature: Upload Image Tab

  @androidApp
  Scenario: Verify add image from library to canvas, show image selected in Lookbook Editor screen
    Given I launch and Open SmtGood Android app
    And I click 'Log in/Sign up here!' button
    When I login with valid account
    And I click create LookBook
    And I click on the title is 'Blank canvas'
    And I click skip tutorial
    And I click 'OK' button
    And I click on the title is 'Upload'
    And I click allow
    And I click camera
    And I click on the title is 'Shutter'
    And I accept image
    Then I can see 1 images in LookBook Editor
    When I click on the title is 'Delete'

  @androidApp
  Scenario: Verify add 9 images from the Products item, show 9 images selected
    Given I click on the title is 'Products'
    When I click on the title is 'Dresses'
    And I click many select 'Dresses'
    And I select image in 'Dresses' with index 0
    And I select image in 'Dresses' with index 1
    And I select image in 'Dresses' with index 2
    And I select image in 'Dresses' with index 3
    And I select image in 'Dresses' with index 4
    And I select image in 'Dresses' with index 5
    And I select image in 'Dresses' with index 6
    And I select image in 'Dresses' with index 7
    And I select image in 'Dresses' with index 8
    And I click plus button in 'Dresses'
    Then I can see 9 images in LookBook Editor
    When I click back
    And I click 'EXIT' button

  @androidApp
  Scenario: Verify add 10 images from Product, show popup warns limited to 9 images
    Given I click create LookBook
    When I click on the title is 'Blank canvas'
    And I click 'OK' button
    And I click 'My Items' button
    And I click many select 'MY ITEMS'
    And I select image in 'MY ITEMS' with index 0
    And I select image in 'MY ITEMS' with index 1
    And I select image in 'MY ITEMS' with index 2
    And I select image in 'MY ITEMS' with index 3
    And I select image in 'MY ITEMS' with index 4
    And I select image in 'MY ITEMS' with index 5
    And I select image in 'MY ITEMS' with index 6
    And I select image in 'MY ITEMS' with index 7
    And I select image in 'MY ITEMS' with index 8
    And I click plus button in 'MY ITEMS'
    Then I can see 9 images in LookBook Editor