const loginPageSelectors = require('../support/pages/login')

describe('template spec', () => {

  it('Comprar producto -e2e-', () => {
    // visitar la pagina 
    cy.visit('/');
    // ingresar al sistema
    cy.get('[data-cy="registertoggle"]').dblclick();
    cy.get(`[data-cy=${loginPageSelectors.user}]`).type('pushingit');
    cy.get('[data-cy="pass"]').type(Cypress.env().password);
    cy.get('[data-cy="submitForm"]').click();

    // dirigirse al modulo de compras
    cy.get('[data-cy="onlineshoplink"]').click();
    //cy.intercept para poder interceptar la llamada que carga los productos y esperar que el codigo sea 200
    //continuar con el test. Agregar un producto nuevo / editar un producto / agregar un producto al carrito de compras

    // agregar un producto un producto al carrito

    // visitar el carrito

    // Comprobar el billing summary


    // completar los datos del checkout

    // verificar el recibo de compra

    // verificar la compra en la base de datos

  });


  it('Deberia verificar que el producto fue agregado al carrito de compras', () => {
    let ID = '123'
    // API
    // iniciar session
    cy.eliminarProducto(ID)
    cy.createProduct(ID)
    // añadimos el producto al carrito con la API
    // visitamos directamente el carrito de compras
    //UI
    //Verificamos que el producto se agrego correctamente
  })
});