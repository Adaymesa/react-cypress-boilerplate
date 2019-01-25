import { home } from "../fixtures";

describe("My First Test", function() {
  beforeEach(() => {
    cy.visit("localhost:3000");
  });
  it("Hidden Message is not visible on page load", () => {
    cy.contains(home.hiddenMessage).should("be.not.visible");
  });

  it("Hidden Message is visible after clicking button", () => {
    cy.contains(home.button).click();
    cy.contains(home.hiddenMessage).should("be.visible");
  });
});
