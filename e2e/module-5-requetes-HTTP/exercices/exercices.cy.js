const { describe } = require("mocha")

describe('test requetes back via request', () => {


    it('tester une api', function () {

        cy.request('GET', 'https://jsonplaceholder.typicode.com/posts').then($response => {
            expect($response.status).to.eq(200)
            expect($response.body.length).to.be.greaterThan(0)
        })

    })

    it('test stub requete', () => {

        cy.intercept('https://jsonplaceholder.typicode.com/posts', [
            {
                "userId": 1259,
                "id": 1,
                "title": "mock nass",
                "body": "body mocké"
            }
        ]).as('interception')

        // données simulées car pas de lien dans l exo
        // cy.visit('/ma-page-de-posts');


        // cy.wait('@interception');
        // cy.contains('mock nass').should('be.visible');


    })



    it('tkt le sang', () => {

        let somme = 0

        cy.get('.product').filter('.available').filter(':contains("Pro")').should('have.length', 2).each($el=>{
            
            let prix = Number($el.text())
            somme+= prix
        
        }).then(()=>{
            expect(somme).to.eq(1200)
        })





    })

})