import locators from './locators';
import userData from '../fixtures/auth.json';

Cypress.Commands.add('login', () => {
    cy.visit('https://app.simulacomex.com.br/admin/usuarios/login', { 
        failOnStatusCode: false,
        timeout: 30000 
    });
    cy.wait(3000);
    cy.get('#UsuarioLogin').clear().type('feliperoos98@gmail.com');
    cy.get('#UsuarioPassword').clear().type('583680');
    cy.get("button[type='submit'].btn.btn-primary").click();
    cy.wait(10000);
});