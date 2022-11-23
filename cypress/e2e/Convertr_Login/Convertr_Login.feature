Feature: Home Page
  As a user
  I want to load the Convertr home page
  So that I can Verify that the page functions as intended according to the requirement.

  Acceptance Criteria:
  * The page loads successfully.
  * The Your Feed tab is present
  * The Global Feed is present
  * Home Sign up & Sign in tabs in the top right corner

    Scenario: Navigate to the Convertr's homepage
      Given I open a browser
      When I enter the Convertr URL into the address  bar
      Then The Convertr Homepage is  loaded

      Given The Convertr Homepage is  loaded
      When I verify that the page that loaded is indeed the homepage
      Then I should see "Your Feed" tabs
      And I should see the Global Feed" tabs

      Given The Convertr Homepage is  loaded
      When I verify that the page that loaded is indeed the homepage
      Then I see the Sign up button
      And I see the Sign in button
      And I see the Home button

