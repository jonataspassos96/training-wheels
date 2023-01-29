/// <reference types="cypress" />

describe('Drag and Drop', () => {
  beforeEach(() => {
    cy.visit('/drag_and_drop')
  })

  const dataTransfer = new DataTransfer()

  it('deve arrastar o cypress para a caixinha do node', () => {
    cy.get('img[alt=Cypress]').trigger('dragstart', { dataTransfer })
    cy.get('.nodejs figure[draggable=true]').trigger('drop', { dataTransfer })
  })

  it('deve arrastar o cypress para a caixinha do node', () => {
    cy.get('img[alt="Robot Framework"]').trigger('dragstart', { dataTransfer })
    cy.get('.python figure[draggable=true]').trigger('drop', { dataTransfer })
  })
})
