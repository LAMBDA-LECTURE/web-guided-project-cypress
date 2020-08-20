// write tests here
describe('Quotes App', () => {
  describe('Inputs and submit button', () => {
    it('can navigate to http://localhost:1234', () => {
      cy.visit('http://localhost:1234')
      cy.url().should('include', 'foo')
    })
  })
})
