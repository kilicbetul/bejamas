describe('Add to cart test', () => {
    before(() => {
      cy.visit('https://qa-recruitment-task.netlify.app/')
    }) 

    it('Add to cart button in featured product on click and wrapper clear button test', () => {
      cy.get('.VAFCy > .Buttonstyle__ButtonWrapper-sc-1d6yy9q-0').click()
      cy.get('.ShoppingCartstyle__ShoppingCartWrapper-sc-1xombtx-0').should('be.visible')

      // Clear
      cy.get('.ShoppingCartstyle__ButtonContainer-sc-1xombtx-1 > .Buttonstyle__ButtonWrapper-sc-1d6yy9q-0').click()
      cy.get('.ShoppingCartstyle__ShoppingCartWrapper-sc-1xombtx-0').should('not.exist')
    })

    it('Empty shopping cart on click and wrapper buttons test', () => {
      cy.get('.style__Wrapper-c50g3c-0 > :nth-child(1) > .style__Row-sc-4ctdae-2 > :nth-child(2)').click()
      cy.get('.ShoppingCartstyle__ShoppingCartWrapper-sc-1xombtx-0').should('be.visible')
  
      // Empty cart text control
      cy.get('.empty-text').contains('Your Shopping Cart is Empty')

      // Close button
      cy.get('.ShoppingCartstyle__CloseButton-sc-1xombtx-2 > .icon').click()
      cy.get('.ShoppingCartstyle__ShoppingCartWrapper-sc-1xombtx-0').should('not.exist')
    
      // Continue Shopping button
      cy.get('.style__Wrapper-c50g3c-0 > :nth-child(1) > .style__Row-sc-4ctdae-2 > :nth-child(2)').click()
      cy.get('.RTgwF > .Buttonstyle__ButtonWrapper-sc-1d6yy9q-0').click()
      cy.get('.ShoppingCartstyle__ShoppingCartWrapper-sc-1xombtx-0').should('not.exist')
    })

    it('Counter badge test', () => {
      cy.get(':nth-child(1) > .ProductCardstyle__ProductCardWrapper-sc-5v39a6-0 > .ProductCardstyle__ProductImageWrapper-sc-5v39a6-1').find('button').then(($btn) => {
        // Click to add to cart button
        $btn.click()
        cy.get('.ShoppingCartstyle__ShoppingCartWrapper-sc-1xombtx-0').should('be.visible')
        // Badge control
        cy.get('.Navbarstyle__ShoppingCartButton-sc-1b7zefh-2 > span').contains('1')
      })
      // Clear cart
      cy.get('.ShoppingCartstyle__ButtonContainer-sc-1xombtx-1 > .Buttonstyle__ButtonWrapper-sc-1d6yy9q-0').click()
      cy.log('ERROR: badge exists when the cart is empty!')
      cy.get('.Navbarstyle__ShoppingCartButton-sc-1b7zefh-2 > span').should('not.exist')
      
    })
  })