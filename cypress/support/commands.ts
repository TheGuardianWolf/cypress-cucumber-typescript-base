// ***********************************************
// This example commands.js shows you how to
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
// Cypress.Commands.add('login', (withAdmin = false) => {
//   Cypress.log({
//     name: 'apiLogin',
//   });

//   const options: Parameters<typeof cy.request>[0] = {
//     method: 'POST',
//     url: Cypress.env('API_LOGIN_URL'),
//     body: {
//       username: Cypress.env(withAdmin ? 'API_LOGIN_ADMIN_USERNAME' : 'API_LOGIN_USERNAME'),
//       password: Cypress.env(withAdmin ? 'API_LOGIN_ADMIN_PASSWORD' : 'API_LOGIN_PASSWORD'),
//     },
//   };

//   return cy.request(options);
// });
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
