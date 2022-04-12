describe('Pagination test', () => {
    before(() => {
      cy.visit('https://qa-recruitment-task.netlify.app/')
    })

    it('category sort test', () => {
        cy.wait(5000)
        cy.get('select').select('Price').wait(5000)
        let i = 0;
        for(i = 0; i <= 1; i++) {
            cy.get('button[aria-label="sorting-order"]').click().wait(5000)
        }
        cy.get('select').select('Alphabetically').wait(5000)
        for(i = 0; i <= 1; i++) {
            cy.get('button[aria-label="sorting-order"]').click().wait(5000)}   
    })
})