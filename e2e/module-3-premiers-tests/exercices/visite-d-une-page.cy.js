describe("visite d'une page", ()=>{


    it("visite avec assertion", () => {

cy.visit('/commands/actions')

cy.get('h1').should('contain', 'Actions')

    })

})