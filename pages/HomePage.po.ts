export class Homepage {

    bannerImage:string="div.blocks-promo>a>img"
    logoImage:string="a.logo img"

    openURL(){
       // cy.visit(Cypress.env('webURL'));
       cy.visit('');
    }
    
    verifybannerImage(){
     cy.get(this.bannerImage).should('exist').and('be.visible');
    }

    verifylogoImage(){
    cy.get(this.logoImage).should('exist').and('be.visible');
    }

}