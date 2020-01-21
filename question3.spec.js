//Start Cypress Tests

describe("Sign up page tests", () => {
  beforeEach(() => {
    //refreshs the page every test. Ensures they can be run in any order.
    cy.visit("https://app.clearscore.com/signup");
  });
  it("Can't sign up with blank email feild", () => {
    cy.get("#email").should("be.empty");
    cy.contains("Get started").should("be.disabled");
  });

  it("Can't sign up with invalid email", () => {
    cy.get("#email").type("test");
    //click out of text box so notfication appears
    cy.contains("Sign up").click();
    cy.contains("Please enter a valid email address").should("be.visible");
    cy.contains("Get started").should("be.disabled");
  });
  it("Can't sign up with email with no '@' symbol", () => {
    cy.get("#email").type("test.com");
    //click out of text box so notfication appears
    cy.contains("Sign up").click();
    cy.contains("Please enter a valid email address").should("be.visible");
    cy.contains("Get started").should("be.disabled");
  });
  it("Can't sign up with email without'.com' ", () => {
    cy.get("#email").type("test@gmai.coooooo");
    //click out of text box so notfication appears
    cy.contains("Sign up").click();
    cy.contains("Please enter a valid email address").should("be.visible");
    cy.contains("Get started").should("be.disabled");
  });
  it("Can't sign up with already registered email address", () => {
    cy.get("#email").type("test@gmail.com");
    cy.contains("Get started").click();
    cy.contains(
      "This email address has already been registered with ClearScore."
    ).should("be.visible");
  });
  it("User is taken to stage 1 of registration after signup", () => {
    //using 'Date()' function as an appendage for email, so that it is unique
    const today = new Date();
    const date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    const time =
      today.getHours() + "-" + today.getMinutes() + "-" + today.getSeconds();
    const dateTime = date + "_" + time;

    cy.get("#email").type("test" + dateTime + "@gmail.com");
    cy.contains("Get started").click();

    //checking the url of the page it lands on
    cy.url().should("include", "//app.clearscore.com/step1/");
  });
});
