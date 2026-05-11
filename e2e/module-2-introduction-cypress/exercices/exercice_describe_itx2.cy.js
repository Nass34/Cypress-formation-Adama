describe("un describe pour 2 it", ()=>{



it('visite premier site',()=>{
    cy.visit('https://google.com')
})

it('visite deuxieme site',()=>{
    cy.visit('https://facebook.com')
})


})