Feature: Cucumber Integration with Jenkins and Qmetry

Scenario Outline: Login Jenkins page
    Given User navigates to Jenkins
    When User Clicks on login button
    Then login page needs to be displayed