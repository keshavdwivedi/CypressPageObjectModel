export class Register{

    createAccountLink:string="div.panel.header>ul>li:last-child>a"
    firstname:string="#firstname"
    lastname:string="#lastname"
    emailid:string="#email_address"
    password:string="#password"
    confirmpassword:string="#password-confirmation"
    createAccountButton:string="div.primary>button.action.submit.primary>span"
    successMessage:string="div.message-success.success.message"
    myAccountHeading:string=".base"
    contactdetails:string=".box-content>p"

    verifycreateAccountLink(){
        cy.get(this.createAccountLink).should('exist').and('be.visible').click();
        cy.url().should('contain','create');
    }

    enterName(firstnameVal:string,lastnameVal:string){
     cy.get(this.firstname).should('exist').and('be.visible').type(firstnameVal);
     cy.get(this.lastname).should('exist').and('be.visible').type(lastnameVal);
    }

    enterEmailId(emailidVal:string){
        cy.get(this.emailid).should('exist').and('be.visible').type(emailidVal);
    }

    enterPasswords(passwordVal:string,confirmpasswordVal:string){
        cy.get(this.password).should('exist').and('be.visible').type(passwordVal);
        cy.get(this.confirmpassword).should('exist').and('be.visible').type(confirmpasswordVal);
    }

    clickCreateAcccountButton(){
        cy.get(this.createAccountButton).click();
    }

    validateSucessMessage(successtext:string,headertext:string,contactdetails:string){
        cy.get(this.successMessage).should('be.visible').and('exist').invoke('text').as('successtext');
        cy.get('@successtext').should('contain',successtext);

        cy.get(this.myAccountHeading).should('be.visible').and('exist').invoke('text').as('accountHeading');
        cy.get('@accountHeading').should('contain',headertext);

        cy.get(this.contactdetails).should('be.visible').invoke('text').as('contact');
        cy.get('@contact').should('contain',contactdetails);

    }  
}