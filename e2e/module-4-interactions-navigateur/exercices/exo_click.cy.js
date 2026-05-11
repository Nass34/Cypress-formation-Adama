describe('test interaction click', () => {


    it("cliquer sur une checkbox", () => {

        cy.visit('/commands/actions')
        cy.get('#email1')
            .type('test@mail.fr')
            .should('have.value', 'test@mail.fr')


    })
})