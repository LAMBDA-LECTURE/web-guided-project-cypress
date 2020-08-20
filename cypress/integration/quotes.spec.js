// write tests here
describe('Quotes App', () => {
  describe('Inputs and submit button', () => {
    it('can navigate to http://localhost:1234', () => {
      cy.visit('http://localhost:1234')
      cy.url().should('include', 'localhost')
    })

    it('the submit button is disabled', () => {
      cy.get('#submitBtn').should('be.disabled')
    })

    it('can type something in the "text" input', () => {
      cy.get('input[name="text"]')
        .type('Have fun')
        .should('have.value', 'Have fun')
    })

    it('Can Type Something In The "author" input', () => {
      //get the input
      cy.get('input[name="author"]')
        //type into text bar
        .type('pogChamp')
        //Checks to make sure you passed 'pogChamp' into the text bar
        .should('have.value', 'pogChamp')
    })

    
  })
})
