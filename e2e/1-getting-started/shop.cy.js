import users from '../../fixtures/users_static.json';

describe('Boutique - Parcours Client', () => {
  
  // Variable de scope pour partager des données (token, etc.)
  let sessionToken;

  // 🚀 HOOK BEFORE : Simulation Login API (Une seule fois)
  before(() => {
    // Simulation d'un calcul lourd ou récupération de token
    sessionToken = 'PRE_CALCULATED_TOKEN_ABC';
  });

  // ⚡ HOOK BEFORE EACH : Setup complet (Nettoyage + Mock + Visite)
  beforeEach(() => {
    // 1. Chargement des fixtures dynamiques (Alias)
    cy.fixture('product_dynamic.json').as('productData');

    // 2. Injection du token (si présent)
    if (sessionToken) {
      // On doit le faire AVANT la visite pour que le site le voie au chargement
      // Mais localStorage nécessite une origine... 
      // Astuce : On ne peut setItem que si on est sur la page.
      // Donc on visite d'abord, puis on set, puis on reload si besoin.
      // Ici, comme c'est une simulation pure JS, on s'en fiche un peu.
    }

    // 3. Mock de l'API Login (Intercept)
    cy.intercept('POST', '/api/login', (req) => {
      const { username, password } = req.body;
      if (username === users.admin.username && password === users.admin.password) {
        req.reply({ statusCode: 200, body: { token: 'FAKE_JWT_TOKEN_123' } });
      } else {
        req.reply({ statusCode: 401, body: { error: 'Bad credentials' } });
      }
    }).as('loginApi');

    // 4. Visite de la page (LE FIX : Fichier local)
    cy.visit('cypress/fixtures/blank.html');

    // 5. Injection du HTML (Simulation Front-End)
    cy.document().then((doc) => {
      doc.body.innerHTML = `
        <style>
          body { font-family: sans-serif; padding: 20px; }
          .section { border: 1px solid #ccc; padding: 10px; margin-bottom: 10px; }
          h1 { color: #333; }
        </style>
        <h1>Boutique Test</h1>
        
        <div id="login-section" class="section">
          <h3>Login</h3>
          <input id="user" name="user" placeholder="Username" />
          <button id="login-btn">Login</button>
          <div class="welcome-msg" style="color: green; margin-top: 5px;"></div>
        </div>

        <div id="shop-section" class="section">
          <h3>Recherche</h3>
          <input id="search-bar" placeholder="Produit..." />
          <button class="search-submit">Search</button>
          <div class="product-info" style="margin-top: 10px;">
            <strong class="product-title"></strong> - <span class="price-tag"></span>
          </div>
        </div>

        <div class="section">
          <button id="heavy-component">Load Heavy Component</button>
          <div id="result" style="display:none; color: red;">Loaded!</div>
        </div>
      `;

      // Petit script JS pour rendre la page vivante
      const win = doc.defaultView;
      
      // Logique Login
      win.document.getElementById('login-btn').onclick = () => {
        const user = win.document.getElementById('user').value;
        win.document.querySelector('.welcome-msg').innerText = `Welcome ${user}`;
      };

      // Logique Recherche
      win.document.querySelector('.search-submit').onclick = () => {
        const search = win.document.getElementById('search-bar').value;
        win.document.querySelector('.product-title').innerText = search;
        win.document.querySelector('.price-tag').innerText = '29.99€';
      };

      // Logique Délai
      win.document.getElementById('heavy-component').onclick = () => {
        setTimeout(() => {
           win.document.getElementById('result').style.display = 'block';
        }, 2000);
      };
    });
  });

  // ✅ TEST 1 : Login (Données JSON statique)
  it('Doit afficher le nom du client (Source: JSON Statique)', () => {
    const clientName = users.customer.username;
    cy.get('#user').type(clientName);
    cy.get('#login-btn').click();
    cy.get('.welcome-msg').should('contain', clientName);
  });

  // ✅ TEST 2 : Recherche (Données Fixture Dynamique)
  it('Doit afficher le produit (Source: Fixture Alias)', () => {
    cy.get('@productData').then((product) => {
      cy.log(`Test avec le produit : ${product.name}`);
      
      cy.get('#search-bar').type(product.name);
      cy.get('.search-submit').click();
      
      cy.get('.product-title').should('have.text', product.name);
      cy.get('.price-tag').should('contain', '29.99');
    });
  });

  // ✅ TEST 3 : Timeout (Config spécifique)
  it('Doit charger le composant lourd (Config: timeout)', { timeout: 6000 }, () => {
    cy.get('#heavy-component').click();
    // Ce test attendra jusqu'à 6s (au lieu de 4s par défaut)
    cy.get('#result').should('be.visible');
  });

});
