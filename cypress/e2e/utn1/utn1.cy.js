describe('Admision', () => {
    it ('Main content', () => {
        cy.visit('http://utn.ac.cr/admision')
        cy.contains("Proceso de Admisión")
        cy.wait(5000)
    } )

})