# ClearScore-_Tech_Test

Questions one and three are written in Javascript using the  **Cypress** framework.

Question Two is was created with the API testing tool **Postman**. So please download the file and Import using the Postman app.


**Here are the answers to the Additional Questions:**

**1. How would you integrate the tests you have written into a continuous integration environment?**

I would use a tool called “bamboo” which monitors the code repository and whenever a file is changed:
* checks out the code and runs all the tests
* also does this at regular timed intervals to check the environment still works
* write the tests in a way that they can be run from a command line so that you can automatically run the tests  
* also have an internal public display so that everyone can view the state of the software
  
**2. How would you approach running the same tests across mobile devices and different browsers?**
I would use a tool called appium. This would enable myself to write my tests against multiple platforms. Using the same API

**3. If you had more time available, are there any improvements that you would make to the code provided?**
* Write scripts so all your test can be run with a single command.
* Add some more complex email validation checks
* Check that the email address entered matches a live email server. Send an email to the email address requesting the user to click on a     link which confirms the email address is live and valid. The process should halt until this has been done.
* How to continue to the rest of the tests if the email address box does not disappear when expected
* What to do if a valid email address box does not appear what it should. 
* Had trouble using testing the clearscore web-app using postman, as after a couple failed login requests - it said I had to wait 24hours   to try again.
* Find a more efficient way of testing if the cookies notification box reappears . As using cy.wait isn’t very efficient.
* Add some more API tests, such as can’t login with blank password but valid email, can’t login with blank email address but valid password etc.
