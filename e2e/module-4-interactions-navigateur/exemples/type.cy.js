describe('test interactions page', () => {


    it("taper du texte dans un input", () => {

        cy.visit('/commands/actions')
        cy.get('.action-email').click()
            .type('test@email.com')
            .should('have.value', 'test@email.com')


    })
})