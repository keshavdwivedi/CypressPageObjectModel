export class AddtoCart{

    searchField:string="#search";
    searchResults:string="ol>li>div strong>a";
    sizesSelect:string="div.swatch-option.text";
    colorSelect:string="div.swatch-option.color";
    addtocartButton:string="#product-addtocart-button";
    message_success:string="div[data-ui-id='message-success']>div";
    AddtoCartCount:string="span.counter-number"
    ProceedTocheckoutButton:string="Proceed to Checkout";

    searchSelectProduct(productName:string,productText:string){
        cy.get(this.searchField).type(productName);
        cy.get(this.searchResults).each(($ele)=>{
            if($ele.text().includes(productText)){
                cy.wrap($ele).click({force:true});
            }
        })
    }

    selectSize(sizeText:string){
    cy.get(this.sizesSelect).each(($size)=>{
        cy.log("The size results are ",$size.text());
        if($size.text().includes(sizeText)){
            cy.wrap($size,{timeout:7000}).click();
        }
    })
  }

  selectColor(){
    cy.get(this.colorSelect).eq(0).click();
  }

  clickAddtoCartButton(){
    cy.get(this.addtocartButton).click()
  }

  verifyAddtoCartSucessMessage(){
    return cy.get(this.message_success);
  }

  verifyAddtocartCount(){
    return cy.get(this.AddtoCartCount);
  }

  clickAddtocartCount(){
    cy.get(this.AddtoCartCount).click().wait(1000);
  }

  clickCheckoutButton(){
    cy.contains(this.ProceedTocheckoutButton).should('exist').and('be.visible').click({force:true});
  }

}