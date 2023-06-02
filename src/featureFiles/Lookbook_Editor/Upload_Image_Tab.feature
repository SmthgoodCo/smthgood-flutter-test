Feature: Upload Image Tab

  @androidApp
  Scenario: Verify add image from library to canvas, show image selected in Lookbook Editor screen
    Given I launch and Open SmtGood Android app
    When I click on the image with index 5
    And I click 'Sign up here!' button
    And I click 'Log in/Sign up here!' button
    And I skip the privacy popup
    And I login with email 'toanSmtgood_automation@gmail.com' and password 'automation123'
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
  Scenario: Verify add 5 images from the Products item, show 5 images selected
    Given I click on the title is 'Products'
    When I click on the title is 'Dresses'
    And I click many select 'Dresses'
    And I select image in 'Dresses' with index 0
    And I select image in 'Dresses' with index 1
    And I select image in 'Dresses' with index 2
    And I select image in 'Dresses' with index 3
    And I select image in 'Dresses' with index 4
    # And I select image in 'Dresses' with index 5
    # And I select image in 'Dresses' with index 6
    # And I select image in 'Dresses' with index 7
    # And I select image in 'Dresses' with index 8
    # And I click plus button
    # Then I can see 1 images in LookBook Editor
    # When I click back
    # And I click 'EXIT' button

  # @androidApp
  # Scenario: Verify add 5 images from Product, show popup warns limited to 5 images
  #   Given I click create LookBook
  #   When I click on the title is 'Blank canvas'
  #   And I click 'OK' button
  #   And I click 'My Items' button
  #   And I click many select 'MY ITEMS'
  #   And I select image in 'MY ITEMS' with index 0
  #   And I select image in 'MY ITEMS' with index 1
  #   And I select image in 'MY ITEMS' with index 2
  #   And I select image in 'MY ITEMS' with index 3
  #   And I select image in 'MY ITEMS' with index 4
  #   # And I select image in 'MY ITEMS' with index 5
  #   # And I select image in 'MY ITEMS' with index 6
  #   # And I select image in 'MY ITEMS' with index 7
  #   # And I select image in 'MY ITEMS' with index 8
  #   And I click plus button in 'MY ITEMS'
  #   Then I can see 1 images in LookBook Editor