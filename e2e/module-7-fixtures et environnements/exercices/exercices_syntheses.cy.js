import loginPage from "../../../pages/loginPage"

describe('exercice syntheses', function () {


    beforeEach(function () {

        cy.visit('/')
        cy.clearLocalStorage()
        cy.fixture("utilisateurs").then((user) => {

            this.user = user

        })


    })


    it('test', function () {


        loginPage.seConnecter(this.user.user, this.user.pass)
        cy.getCookie('session-username').should('exist')


    })






})