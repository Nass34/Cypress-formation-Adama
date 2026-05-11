import loginPage from "../../../pages/loginPage";
import productsPage from "../../../pages/productPage";
import checkoutPage from "../../../pages/checkoutPage";


describe('Tunnel Expert SauceDemo', () => {

    beforeEach(() => {
        cy.visit('/');
    });

    it('Flux complet avec POM et Fixtures', () => {

        // 1. On appelle le fichier utilisateur.json
        cy.fixture('utilisateur').then((data) => {

            // 2. On utilise 'data' pour remplir les méthodes du POM
            loginPage.login(data.user, data.pass);

            productsPage.ajouterSacADos();
            productsPage.ouvrirPanier();

            // On pioche le prénom et le nom dans la fixture
            checkoutPage.remplirInfos(data.prenom, data.nom, "75000");
            checkoutPage.finaliserAchat();

            // 3. Vérification finale
            cy.get('.complete-header')
                .should('contain', 'Thank you');

        });

    });

});