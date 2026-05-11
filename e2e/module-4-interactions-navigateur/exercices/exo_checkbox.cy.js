describe('test interaction checkbox', () => {


    it("cliquer sur une checkbox", () => {

        cy.visit('/commands/actions')
        cy.get('input[type="checkbox"]').first()
            .check()
            .should('be.checked')


    })
})