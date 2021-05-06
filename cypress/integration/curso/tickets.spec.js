/// <reference types="cypress"/>

describe('tickets', () => {
  beforeEach(()=>{cy.visit("http://bit.ly/2XSuwCW")})
  it('confimando pagina de ticket box', () => {
    cy.get('h1').should('contain', 'TICKETBOX')
  });

  it.only("preencher todos os campos inputs", ()=> {
    const firsName = "rafael"
    cy.get('#first-name').type(`${firsName}`);
    cy.get('#last-name').type('souza');
    cy.get('#email').type('test@test.com');
    cy.get('#requests').type('muito bom curso de cypress');
    cy.get('#signature').type(firsName);

  })
});