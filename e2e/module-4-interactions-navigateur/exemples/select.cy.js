describe('test interactions page', () => {


    it("selectionner une option", () => {

        cy.visit('/commands/actions')
        cy.get('.action-select')
            .select("apples")
            .should('have.value', 'fr-apples')
        //autre facon avec option:select pour cibler l'option sélectionnée par le select 
        cy.get('.action-select option:selected')
            .should('contain', 'apples')



    })
})