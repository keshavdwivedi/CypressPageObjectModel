import { AddtoCart } from "../../../pages/AddtoCart.po";
const addtocartObj=new AddtoCart();
let addtocartData;

describe('Add to cart test suite',()=>{

    before(()=>{
        cy.fixture('addtocart.json').then((addtocart)=>{
            addtocartData=addtocart;
            });
        });
        beforeEach(()=>{
            cy.visit(Cypress.env('webURL'));
            cy.verifyLogin(addtocartData.loginDetails.emailaddress,addtocartData.loginDetails.password);
        });

        it('Add To Cart Test 1', () => {
            
            addtocartObj.searchSelectProduct(addtocartData.AddtocartElements.productName,addtocartData.AddtocartElements.productText);
            addtocartObj.selectSize(addtocartData.AddtocartElements.productSize);
            addtocartObj.selectColor();
            addtocartObj.clickAddtoCartButton();
            addtocartObj.verifyAddtoCartSucessMessage().should('contain',addtocartData.AddtocartElements.successMessage);
            addtocartObj.verifyAddtocartCount().should('contain',addtocartData.AddtocartElements.cartCount);
            addtocartObj.clickAddtocartCount();
            addtocartObj.clickCheckoutButton();
            cy.verifyUrl(addtocartData.AddtocartElements.successURL)
        });
   });



