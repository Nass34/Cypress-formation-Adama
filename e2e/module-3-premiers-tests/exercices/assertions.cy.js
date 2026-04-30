describe("assertions", ()=>{


    it("visite avec assertion", () => {

cy.visit('/commands/actions')

cy.get('#email1').should('be.visible').and('be.empty')

// voici ce que j'avais fait à la base, mais ce n'est pas une bonne chose : 
cy.get('#email1').then($value=>{
    const text = $value.text().trim(); // l'element html value est un input, il n'a donc pas de texte, ce n'est pas une div, p, span...
    expect(text).to.be.empty // il sera donc toujours vide! le test passera même si le champ a un texte qui est rempli
    expect(typeof(text)).to.be.a('string')
    expect(text).to.eq("") 
})

// ici on utilise la méthode val de jquery, qui retournera toujours un string meme si l'input est de type number
    cy.get('#email1')
  .should('be.visible')              
  .invoke('val')                     
  .then((value) => {                 
    expect(value).to.be.a('string')  
    expect(value).to.be.empty        
    expect(value).to.eq('')          
  })

  //  on aurait aussi pu le faire directement avec should puis expect
  // peut etre préférable car on passe par un should => on a des retry ! pur cypress
cy.get('#email1')
  .should('be.visible')       
  .invoke('val')              
  .should((value) => {        
    expect(value).to.be.a('string')
    expect(value).to.be.empty
    expect(value).to.eq('')
  })

  

    })

})