$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("DC.feature");
formatter.feature({
  "line": 1,
  "name": "Cucumber Integration with Jenkins and Qmetry",
  "description": "",
  "id": "cucumber-integration-with-jenkins-and-qmetry",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Cucumber Integration with Jenkins and Qmetry",
  "description": "",
  "id": "cucumber-integration-with-jenkins-and-qmetry;cucumber-integration-with-jenkins-and-qmetry",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User navigates to Jenkins",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User Clicks on login button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "login page needs to be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_stepdefiniton.user_navigates_to_Jenkins()"
});
formatter.result({
  "duration": 358876800,
  "status": "passed"
});
formatter.match({
  "location": "Login_stepdefiniton.user_Clicks_on_login_button()"
});
formatter.result({
  "duration": 72700,
  "status": "passed"
});
formatter.match({
  "location": "Login_stepdefiniton.login_page_needs_to_be_displayed()"
});
formatter.result({
  "duration": 193100,
  "status": "passed"
});
});