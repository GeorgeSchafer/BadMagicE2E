const url = fetch(`../support/login.json`).url;

describe('template spec', () => {
  it('passes', () => {
    cy.visit(url)
  })
})