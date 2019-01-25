import { home } from "../fixtures";

describe("My First Test", function() {
  before(() => {
    cy.visit("localhost:3000");
  });
  it("Does not do much!", function() {
    cy.contains(home.button).click();
    cy.contains(home.hiddenMessage).should("be.visible");
  });
});
