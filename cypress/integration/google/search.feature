Feature: Search
  Scenario: Just came in
    Given I'm at the search page
    Then there is a search bar

  Scenario Outline: Using google search
    Given I'm at the search page
    When I type '<term>' in search
    Then I'm taken to a results page

    Examples:
      | term   |
      | apple  |
      | banana |
      | peach  |
      | pear   |
