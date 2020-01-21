//Start of our Cypress tests

describe("Testing cookies funcationality of website", () => {
  beforeEach(() => {
    //refreshs the page every test. Ensures they can be run in any order.
    cy.visit("https://www.clearscore.com/");
  });
  it("Cookie notification is present", () => {
    //this line detects if the cookies notfication is visible to the user
    cy.contains("We use cookies to improve your experience.").should(
      "be.visible"
    );
  });

  it("Cookies notification can be dismissed", () => {
    //clicks the 'no problem' button'
    cy.contains("No problem")
      .should("be.visible")
      .click();

    //checks if the notfication goes away
    cy.contains("We use cookies to improve your experience.").should(
      "not.exist"
    );
  });

  it("Cookies does not reappear after being set", () => {
    cy.contains("No problem").click();
    //waits a peroid to see if notifcation appears again
    cy.wait(100);
    cy.contains("We use cookies to improve your experience.").should(
      "not.exist"
    );

    //reloading the page, notifcation should still be gone too
    cy.reload();
    cy.contains("We use cookies to improve your experience.").should(
      "not.exist"
    );
  });
  it("Check Cookie(s) are set", () => {
    cy.contains("No problem").click();
    cy.getCookie("CS_ACCEPT_COOKIES").should("have.property", "value", "true");
  });
});
