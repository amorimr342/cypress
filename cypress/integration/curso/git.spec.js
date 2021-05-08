/// <reference types="cypress"/>
describe("acessando o git", () => {
    beforeEach(()=>{
        cy.visit("https://github.com/login")
        cy.get('#login_field').type("amorimr342@gmail.com")
        cy.get('#password').type("test1212@")
        cy.get('.btn').click();
        const repositories="cypress";       
        cy.contains(`amorimr342/${repositories}`).click()
    })
    it('preenchendo dados do git ', () => {
       
        cy.contains('Compare & pull request').click()
        cy.scrollTo(0,500)
        cy.contains('Create pull request').click({force: true})
        cy.scrollTo(0,0)
        cy.get('.flash > .btn').click()
        cy.get('.hx_create-pr-button').click()
    });
    it.only('merge pull request', () => {
        cy.get('[data-content="Pull requests"]').click()
        cy.get('#issue_5_link').click()
        cy.get('.BtnGroup > .btn-group-merge').click()
        cy.get('.btn-group-merge > .btn').click()
    });
});

