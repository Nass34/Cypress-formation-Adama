describe('test interactions page', () => {


    it("cliquer sur une checkbox", () => {

        cy.visit('/commands/actions')
        cy.get('.action-checkboxes [type="checkbox"]')
            .first()
            .check()
            .should('be.checked')


    })
})