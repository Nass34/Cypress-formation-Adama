const { it } = require("mocha")

describle("Premier test cypress", ()=>{


    it("Viste de la page d'exemple", ()=>{
        cy.visit("https://example.com")
    
    })



})