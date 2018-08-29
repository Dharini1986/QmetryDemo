package runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features ="Features",
        glue = {"stepdefinition"},
		plugin={"html:target/login.report",
	             "json:target/cucumber-report.json"}
		)
public class Trunner {

}
