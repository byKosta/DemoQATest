let waited = false

function waitOneSecond () {
  // return a promise that resolves after 1 second
  return new Cypress.Promise((resolve, reject) => {
    setTimeout(() => {
      // set waited to true
      waited = true

      // resolve with 'foo' string
      resolve('foo')
    }, 1000)
  })
}

cy.then(() =>
  // return a promise to cy.then() that
  // is awaited until it resolves
  waitOneSecond().then((str) => {
    expect(str).to.eq('foo')
    expect(waited).to.be.true
  }))