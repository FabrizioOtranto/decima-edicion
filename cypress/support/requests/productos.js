// request referidos a productos

Cypress.Commands.add('getProduct', (ID) => {
    //retorna el producto si existe
})

Cypress.Commands.add('deletProduct', (ID) => {
    cy.getProduct(ID).then(respuesta => {
        //elimina el producto si existe
    })

})

Cypress.Commands.add('createProduct', (ID) => {
    //crea el producto
})

Cypress.Commands.add('eliminarProducto', (id) => {
    cy.request({
        method: "GET",
        url: `${Cypress.env().baseUrlAPI}/products?id=${id}`,
        failsOnStatusCode: false,
        headers: {
            Authorization: `Bearer ${Cypress.env().token}`
        }
    }).its('body.products.docs').each((product) => {
        cy.request({
            method: "DELETE",
            url: `${Cypress.env().baseUrlAPI}/product/${product._id}`,
            headers: {
                Authorization: `Bearer ${Cypress.env().token}`,
            }
        });
    });
});