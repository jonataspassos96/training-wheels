/// <reference types="cypress" />

describe('Select de personagens', () => {
  beforeEach(() => {
    cy.visit('/select')
  })

  it('selecionar bucky por dia', () => {
    cy.get('#avengerList')
      .select('Bucky')
      .should('have.value', '2')
  })

  it('selecionar o Tony Stark sem ser pelo id', () => {
    cy.contains('option', 'Selecione um personagem')
      .parent()
      .select('Tony Stark')
      .should('have.value', '3')
  })
})
