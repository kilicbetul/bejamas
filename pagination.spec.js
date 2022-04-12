describe('Pagination test', () => {
  before(() => {
    cy.visit('https://qa-recruitment-task.netlify.app/')
  })

  it('Next and back arrow disable test', () => {
    cy.get('.PaginationIndicatorstyle__Ol-urm45v-0 > li').each(($el, index, $list) => {
      if (index === 1) {
        cy.get($list[0]).should('have.attr', 'disabled')
        cy.get($list[7]).should('not.have.attr', 'disabled')
      }
      if (index > 1 && index < $list.length - 2) {
        cy.wrap($el).click()
        cy.get($list[0]).should('not.have.attr', 'disabled')
        cy.get($list[7]).should('not.have.attr', 'disabled')
      }
      if (index === 6) {
        cy.wrap($el).click()
        cy.get($list[0]).eq(0).should('not.have.attr', 'disabled')
        cy.get($list[7]).should('have.attr', 'disabled')
      }
    })
  })

  it('Next and back arrow click test', () => {
    cy.get('.PaginationIndicatorstyle__Ol-urm45v-0 > li').then(($list) => {
      cy.get($list[7]).click().then(()=> {
        cy.get($list[2]).should('have.class', 'bbjimK')
      })

      cy.get($list[0]).click().then(()=> {
        cy.get($list[1]).should('have.class', 'bbjimK')
      })
    })
  })

  it('Product list length test', () => {
    cy.get('.PaginationIndicatorstyle__Ol-urm45v-0 > li').each(($el, index, $list) => {
      if (index !== 0 && index !== $list.length - 1) {
        cy.wrap($el).click()
        cy.get('.ProductCardstyle__ProductImageWrapper-sc-5v39a6-1').should('have.length', 6)
      }
    })
  })
})