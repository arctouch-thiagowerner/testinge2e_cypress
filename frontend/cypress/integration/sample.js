describe('My First Test', () => {
    it('Does not do much!', () => {
      expect(true).to.equal(true)
    })
  })

describe('Accessing site', () => {
    it('Does not do much!', () => {
        cy.visit("http://localhost:5000")
      })
})