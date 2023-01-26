/// <reference types="cypress" />

describe('Login', () => {
  it('deve logar com sucesso', () => {
    cy.visit('/login')

    cy.get('#nickId').type('papitorocks')
    cy.get('#passId').type('pwd123')
  })
})
