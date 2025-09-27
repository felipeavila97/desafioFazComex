/// <reference types="cypress" />

import locators from "../support/locators";
import userData from "../fixtures/auth.json";
import { faker } from '@faker-js/faker';

describe('Teste automatizado da plataforma SimulaComex', () => {
    it('Dado que realizo o login com sucesso', () => {
        cy.login();
    });

    it('Dado que realizo o login com senha inválida', () => {
        cy.visit("https://app.simulacomex.com.br/admin/usuarios/login");
        cy.get(locators.LOGIN.email_field).type(userData.login);
        cy.get(locators.LOGIN.password_field).type('12312');
        cy.get(locators.LOGIN.btn_login).click();
        cy.get(locators.LOGIN.error_message).should('be.visible').and('contain.text', 'Usuário ou senha inválido');
    });

    it('Dado que realizo o login com email inválido', () => {
        cy.visit("https://app.simulacomex.com.br/admin/usuarios/login");
        cy.get(locators.LOGIN.email_field).type('invalid@invalid.com');
        cy.get(locators.LOGIN.password_field).type(userData.password);
        cy.get(locators.LOGIN.btn_login).click();
        cy.get(locators.LOGIN.error_message).should('be.visible').and('contain.text', 'Usuário ou senha inválido');
    });

    it('Dado que não preencho o campo de email', () => {
        cy.visit("https://app.simulacomex.com.br/admin/usuarios/login");
        cy.get(locators.LOGIN.password_field).type(userData.password);
        cy.get(locators.LOGIN.email_field).then(($input) => {
            expect($input[0].validationMessage).to.eq('Preencha este campo.');
        });
        cy.get(locators.LOGIN.btn_login).click();
    });

    it('Dado que não preencho o campo de senha', () => {
        cy.visit("https://app.simulacomex.com.br/admin/usuarios/login");
        cy.get(locators.LOGIN.email_field).type(userData.login);
        cy.get(locators.LOGIN.password_field).then(($input) => {
            expect($input[0].validationMessage).to.eq('Preencha este campo.');
        });
        cy.get(locators.LOGIN.btn_login).click();
    });

});


