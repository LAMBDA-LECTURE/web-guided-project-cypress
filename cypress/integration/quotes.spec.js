function foo(params) {
  return 'foo'
}

// write tests here
describe('Quotes App', () => {
  describe('Inputs and submit button', () => {
    it('Returns the string "foo"', () => {
      expect(foo()).to.eq('fooooooooooooooooooooooooooo')
      expect(foo()).not.to.eq('bar')
    })
  })
})
