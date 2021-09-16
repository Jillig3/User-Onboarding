describe("Quotes App", () => {
    beforeEach(() => {
      cy.visit('localhost:3000'); 
    })

    const nameInput = () => cy.get('input[name=name]');
    const emailInput = () => cy.get('input[name=email]');
    const passwordInput = () => cy.get('input[name=password]');
    const submitBtn = () => cy.get('button[id=submitBtn]');
    const inputType = () => cy.get('[type="checkbox"]');

    
    describe('Fills out inputs', () => {
        it('can navigate to the site', () => {
            cy.url().should('include', 'localhost');
        })

        it('submit button starts out disabled', () => {
            submitBtn().should('be.disabled');
        })

        it(' types in the inputs and check the box', () => {
            nameInput()
                .should('have.value', '')
                .type('JakeI')
                .should('have.value', 'JakeI');
            emailInput()
                .should('have.value', '')
                .type('test@test.com')
                .should('have.value', 'test@test.com');
            passwordInput()
                .should('have.value', '')
                .type('password123')
                .should('have.value', 'password123');   
            inputType()
                .check() 
            submitBtn()
                .should('not.be.disabled')
                .click('');    
        })  
    })

})