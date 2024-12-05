describe('Testando CRUD Angular', () => {
  let url = 'http://localhost:4200/post/index';
  it('Cenario 1', () => {

    cy.visit(url)
    
    cy.get('.btn-success').click()
    cy.get('#title').type('Testando o titulo do cenario 1')
    cy.get('#body').type('Testando a descrição do cenario 1')
    cy.contains('button', 'Enviar').click()

    cy.window().then((win) => {
      cy.spy(win.console, 'log').as('consoleLog');
    });
    cy.get('@consoleLog').should('be.calledWith', 'Post criado com sucesso!');
    cy.contains('Decode-se').should('be.visible')
    
  })
  it('Cenario 2', () => {

    cy.visit(url)
    cy.get(':nth-child(1) > :nth-child(4) > .btn-group > .btn-primary').click()
    cy.get('#title').type('Testando o titulo do cenario 2')
    cy.get('#body') .type('Testando a descrição do cenario 2 ')
    cy.contains('button', 'Atualizar').click()

    cy.window().then((win) => {
      cy.spy(win.console, 'log').as('consoleLog');
    });
    
      cy.get('@consoleLog').should('be.calledWith', 'Post atualizado com sucesso!');
    cy.contains('Decode-se').should('be.visible')
    
  })

})