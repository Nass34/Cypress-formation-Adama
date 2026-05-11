describe('test interactions page', () => {


    it("Clique sur un bouton et vérifie l effet", () => {

        cy.visit('/commands/actions')
        cy.get('.action-btn').click()
        // apres l'action on vérifie l'effet attendu
        cy.contains('This popover shows up on click').should('be.visible')


    })
})