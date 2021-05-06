/// <reference types="cypress"/>

describe('tickets', () => {
  beforeEach(()=>{cy.visit("http://bit.ly/2XSuwCW")})
  it('confimando pagina de ticket box', () => {
    cy.get('h1').should('contain', 'TICKETBOX')
  });

  it("preencher todos os campos inputs", ()=> {
    const firsName = "rafael"
    cy.get('#first-name').type(`${firsName}`);
    cy.get('#last-name').type('souza');
    cy.get('#email').type('test@test.com');
    cy.get('#requests').type('muito bom curso de cypress');
    cy.get('#signature').type(firsName);

  })

  it.only('selecionado opções do ticket', () => {
    //cy.get('p').should("contain", 'I, , wish to buy 1 General Admission tickets. I understand that all ticket sales are final.')
    cy.get('#ticket-quantity').select("3");
    //cy.get('p').should("contain", "I, , wish to buy 3 General Admission tickets. I understand that all ticket sales are final.")
  });
});