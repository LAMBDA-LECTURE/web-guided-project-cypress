function foo(params) {
  return 'foo'
}

// write tests here
describe('Quotes App', () => {
  describe('Inputs and submit button', () => {
    test('Returns the string "foo"', () => {
      expect(foo()).to.eq('foo')
      expect(foo()).not.to.eq('bar')
    })
  })
})
