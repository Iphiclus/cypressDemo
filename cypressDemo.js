describe("My First Basic visit site test", function() {
  it("Vists Saucedemo.com", function() {
    cy.visit("https://www.saucedemo.com/");
  });
});

describe("Testing Url contains saucedemo", function() {
  it('Url contains saucedemo', function() {
    cy.visit("https://www.saucedemo.com/");

    // Should be on a new URL which includes 'saucedemo'
    cy.url().should("include", "saucedemo");
  });
});

describe("Log in using valid credentials", function() {
  it("Log in to saucedemo using valid credentials", function() {
    cy.visit("https://www.saucedemo.com/");

    // Enter user name and password
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    // Click Login button
    cy.get("#login_button_container > div > form > input.btn_action").click();
  });
});
