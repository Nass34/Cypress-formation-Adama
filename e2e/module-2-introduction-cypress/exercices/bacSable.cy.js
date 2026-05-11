
describe('bac a sable', ()=>{



// it('on s entraine', ()=>{

// cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
// // // cy.get('input[value="radio2"]').click();
// // // cy.get('input[value="radio2"]').should('be.checked')
// // // cy.get('.ui-autocomplete-input').type('FRA')
// // // cy.get('.ui-menu-item-wrapper').each($el=>{
    
// // //     const pays = $el.text().trim()
// // //     if (pays==="France"){
// // //         cy.wrap($el).click();
// // //     }

// // // cy.get('.ui-autocomplete-input').should('have.value', 'France')

// // cy.get('#dropdown-class-example').select('Option2').should('have.value', 'option2')


// // cy.get('#checkBoxOption1, #checkBoxOption2').check();

// cy.get('#opentab').invoke('removeAttr', 'target').click()
// cy.url().should('eq', 'https://www.qaclickacademy.com/')
// cy.origin("https://www.qaclickacademy.com/", ()=>{
//     cy.get('.section-title.mt-50').should('contain', 'Welcome to QAClick Academy ')
// })
// })



it('test rahul', ()=>{
    const modele = "iphone X"
    cy.visit('https://rahulshettyacademy.com/loginpagePractise/') 
    cy.get('#username').type('rahulshettyacademy')
    cy.get('#password').type('learning')
    cy.get('#signInBtn').click()
    cy.contains('h1','Shop Name').should('be.visible')
    cy.get('app-card-list').find('app-card').should('have.length', '4')
    cy.get('app-card').filter(`:contains("${modele}")`).then($el=>{

        cy.wrap($el).find('button').click();

    })
})




it('test rahul amélioré plus simple', ()=>{
    const modele = "iphone X"
    cy.visit('https://rahulshettyacademy.com/loginpagePractise/') 
    cy.get('#username').type('rahulshettyacademy')
    cy.get('#password').type('learning')
    cy.get('#signInBtn').click()
    cy.get('app-card-list').contains('app-card', modele).find('button').click();
   
    })






})

// it('test api', ()=>{

    
    // test pure de requete sur api puis on bosse sur la réponse, sans UI
    // cy.request('GET', "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty")
    // .then($rep=>{
    //     expect($rep.status).to.eq(200)
    //     expect($rep.body[0]).to.have.property('book_name')
    //     cy.log($rep)
    // })

    // // test avec UI ou on clique sur un élément qui génère la requete, puis on intercepte la requete
    // cy.visit('https://rahulshettyacademy.com/angularAppdemo/')

    // cy.intercept('GET', 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty').as('getBooks')

    // cy.get('button[class="btn btn-primary"]').click()

    // cy.wait('@getBooks').then($rep=>{
    //     expect($rep.response.statusCode).to.eq(200)
    //     expect($rep.response.body[0]).to.have.property('book_name')
    //     console.log($rep)
    //     expect($rep.response.statusMessage).to.eq('OK')
    // })




//     cy.request('GET', "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty")
//     .then($rep=>{
//         expect($rep.status).to.eq(200)
//         expect($rep.body[0]).to.have.property('book_name')
//         cy.log($rep)
//     })

//     // test avec UI ou on clique sur un élément qui génère la requete, puis on intercepte la requete
//     cy.visit('https://rahulshettyacademy.com/angularAppdemo/')

//     cy.intercept(
//         {
//             method: 'GET', 
//             url: '**/Library/GetBook.php?AuthorName=shetty'
//         },

//         {
//             statusCode: 200,
//             body:
//             [
//                  {
//                         "book_name": "Nass fake book",
//                         "isbn": "LSA",
//                         "aisle": "2303"
//                  }
                
//             ]
        
//         }
//     ).as('getBooksFake')

//     cy.get('button[class="btn btn-primary"]').click()

//     cy.wait('@getBooksFake').then($rep=>{
//         expect($rep.response.statusCode).to.eq(200)
//         expect($rep.response.body[0]).to.have.property('book_name', 'Nass fake book')
//         console.log($rep)
//         cy.contains('p', "Oops only 1 Book available").should('be.visible')
//         cy.get('tr').contains('td', 'Nass fake book').should('be.visible')
//         cy.contains('td', '2303').next().should('have.text', 'Nass fake book')

//         cy.get('table tbody tr'). should('have.length',1)
//     })


// })









// })