/// <reference types="cypress" />


describe('Automacão Web', () => {
it('Acessando o site Automação Demo', () => {
cy.visit('http://demo.automationtesting.in/Register.html')
cy.get('[placeholder="First Name"]').type('Davi')
cy.get('[placeholder="Last Name"]').type('Ribs')
cy.get('[ng-model="Adress"]').type('Hello World')
cy.get('[ng-model="EmailAdress"]').type('cypressweb@gmail.com')
cy.get('[ng-model="Phone"]').type('8599665544')
cy.get('[value="Male"]').check()
cy.get('#checkbox1').click()
cy.get('#checkbox2').click()
cy.get('#msdd').click()
cy.get(':nth-child(8)>.ui-corner-all').click()
cy.get('h1').click()
cy.get('#Skills').select('SQL')
//cy.get('#countries').select('Brazil')
cy.get('.select2-selection').click()
cy.get('#select2-country-results > :nth-child(5)').click()
cy.get('#yearbox').select('1995')
cy.get('[ng-model="monthbox"]').select('November')
cy.get('#daybox').select('25')
cy.get('#firstpassword').type('123456')
cy.get('#secondpassword').type('123456')
})

})
