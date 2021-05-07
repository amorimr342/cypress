/// <reference types="cypress"/>

describe('tickets', () => {
  beforeEach(() => { cy.visit("http://bit.ly/2XSuwCW") })
  it('confimando pagina de ticket box', () => {
    cy.get('h1').should('contain', 'TICKETBOX')
  });

  it("preencher todos os campos inputs", () => {
    const firsName = "rafael"
    cy.get('#first-name').type(`${firsName}`);
    cy.get('#last-name').type('souza');
    cy.get('#email').type('test@test.com');
    cy.get('#requests').type('muito bom curso de cypress');
    cy.get('#signature').type(firsName);

  })

  it('selecionado opções do ticket', () => {
    //cy.get('p').should("contain", 'I, , wish to buy 1 General Admission tickets. I understand that all ticket sales are final.')
    cy.get('#ticket-quantity').select("3");
    //cy.get('p').should("contain", "I, , wish to buy 3 General Admission tickets. I understand that all ticket sales are final.")
  });

  it('interagino com radio buttons', () => {
    cy.get('#vip').check();
  });

  it('selelecionado o checkbox', () => {
    cy.get('#social-media').check();
    cy.get('#publication').check();
  });
  it('selecionando mais de checkbox', () => {
    cy.get('#friend').check();
    cy.get('#publication').uncheck();
  });

  it('verificando ticketbox', () => {
    cy.get('header h1').should("contain","TICKETBOX");
  });
  it.only('alerts on invalid email', () => {
    cy.get("#email")
      .as("email")
      .type("amorimr342.com");

    cy.get("#email.invalid")
      .as("emailInvalid")
      .should("exist");

    cy.get("@email").clear().type("test@test.com");
    cy.get("#email.invalid").should("not.exist");


  });
  it.only('prenecher e resetar formulario', () => {
    const firstName = "rafael";
    const lastName = "souza";
    const fullName =`${firstName} ${lastName}`;
    cy.get('#first-name').type(`${firstName}`);
    cy.get('#last-name').type(lastName);

    cy.get('#email').type('test@test.com');
    cy.get('#requests').type('muito bom curso de cypress');
     
    cy.get('#ticket-quantity').select("3");

    cy.get('#social-media').check();
    cy.get('#publication').check();
    cy.get('#vip').check();

    cy.get(".agreement p").should(
      "contain",
      `I, ${fullName}, wish to buy 3 VIP tickets.`);
      cy.get("#agree").click();                 
      cy.get('#signature').type(fullName);

      cy.get("button[type='submit']")
        .as("submitButton")
        .should("not.be.disabled");

        cy.get("button[type='reset']").click();

        cy.get("@submitButton").should("be.disabled");
  });
});