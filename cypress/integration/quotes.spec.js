function foo(arg) {
  if (arg === 5) return 'five'
  return 'foo'
}

// write tests here
describe('Quotes App', () => {
  describe('Inputs and submit button', () => {
    it('Returns the string "foo"', () => {
      expect(foo()).to.eq('foo')
      expect(foo()).not.to.eq('bar')
    })
    it('Returns the string "five" if passed five as an arg', () => {
      expect(foo(5)).to.eq('five')
    })
  })
})
