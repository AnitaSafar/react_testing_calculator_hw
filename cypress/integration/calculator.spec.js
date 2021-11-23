describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  });

  it('should update the display with the result of the operations', () => {
    cy.get('#number3').click();
    cy.get('#operator-multiply').click();
    cy.get('#number6').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '18')
  });

  it('should chain operations together', () => {
    cy.get('#number4').click();
    cy.get('#operator_add').click();
    cy.get('#operator_add').click();
    cy.get('#operator_add').click();
    cy.get('.display').should('contain', '12');
  });

  it('should be able to combine range of numbers', () => {
    cy.get('#number6').click();
    cy.get('#decimal').click();
    cy.get('#number5').click();
    cy.get('#operator-subtract').click();
    cy.get('#number8').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-1.5');
  });
})