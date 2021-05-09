describe('My First Test', () => {
  it('Visits the Kitchen Sink', () => {
    cy.visit('http://localhost:3000/');

    cy.get('#test-email')
      .type('someone@example.com')
      .should('have.value', 'someone@example.com');

    cy.get('#test-password')
      .type('supersecret');

    cy.get('#test-submit')
      .click();
  });
});
