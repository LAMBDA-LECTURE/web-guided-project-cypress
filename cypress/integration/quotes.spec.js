// write tests here
describe('Quotes App', () => {

  const textInput = () => cy.get('input[name="text"]')
  const authorInput = () => cy.get('input[name="author"]')
  const submitButton = () => cy.get('#submitBtn')


  describe('Inputs, submit button cancel button', () => {
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

    it('submit button is enabled', () => {
      cy.get('#submitBtn').should('be.enabled')
    })

    it('cancel button empties out both inputs and disables itself', () => {
      cy.get("#cancelBtn").click()
      cy.get("input[name='text']").should("have.value", "")
      cy.get("input[name='author']").should("have.value", "")
      cy.get("#submitBtn").should("be.disabled")
    })

  })

  describe('Submitting a new quote', () => {
    it('can navigate to http://localhost:1234', () => {
      cy.visit('http://localhost:1234')
    })

    it('can submit and delete a new quote', () => {
      textInput().type('Have fun')
      authorInput().type('Lambda')
      submitButton().click()
      cy.contains('Have fun (Lambda)').should('exist')
      cy.contains('Have fun (Lambda)').next().next().click()
      cy.contains('Have fun (Lambda)').should('not.exist')
    })
  })

  describe('Editing an existing quote', () => {
    // add a new one
    // click edit
    // add your edits
    // click submit
    // assert that the edits took
    // clean after yourself!
  })
})
