/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

declare namespace Cypress {
    interface Chainable<Subject = any> {
        verifyTitle(title:string): Chainable<any>;
        verifyUrl(title:string): Chainable<any>;
        verifyLogin(email:string,password:string): Chainable<any>;
    }
  }

  Cypress.Commands.add('verifyLogin',(emailVal:string,passwordVal:string)=>{
     cy.reload();
     cy.get('div.panel.wrapper > div > ul > li.authorization-link > a').as('loginlink').should('exist').then(()=>{
     cy.get('@loginlink').click();
     cy.get('#email').should('be.visible').type(emailVal);
     cy.get('#pass').should('be.visible').type(passwordVal);
     cy.get('#send2').click();
    })
  })

  Cypress.Commands.add('verifyUrl', (urlVal) => { 
   cy.url().then((pageURL:any)=>{
     expect(pageURL).to.contain(urlVal);
     cy.log("The Url verified is ",pageURL);
   })
 })

Cypress.Commands.add('verifyTitle', (titleVal) => { 
    cy.title().then((pageTitle:any)=>{
     expect(pageTitle).to.contain(titleVal);
     cy.log("The page title verified is "+pageTitle);
     
    })
 })