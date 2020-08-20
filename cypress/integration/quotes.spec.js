function foo(arg) {
  if (arg) return 'five'
  return 'foo'
}

// write tests here
describe('Quotes App', () => {
  describe('Inputs and submit button', () => {
    it('Returns the string "foo"', () => {
      expect(foo()).to.eq('foo')
      expect(foo()).not.to.eq('bar')
    })
    it('Returns the string "five" if passed a truthy arg', () => {

    })
    it('Returns the string "foo" if passed a falsy arg', () => {

    })
  })
})
