import { Register } from "../../../pages/Register.po";

const registerobj=new Register();
let testdata;

describe('Register Suite',()=>{

    before('Load the fixure file',()=>{
        cy.fixture('register').then((data)=>{
         testdata=data;
        });
    });
    
    beforeEach('Navigation of Test URL',()=>{
     cy.visit(Cypress.env('webURL'));
     registerobj.verifycreateAccountLink();
    });

    it('Register test 1', () => {
        registerobj.enterName(testdata.user.firstname,testdata.user.lastname);
        registerobj.enterEmailId(testdata.user.email);
        registerobj.enterPasswords(testdata.user.password,testdata.user.confirmpassword);
        registerobj.clickCreateAcccountButton();
        registerobj.verifySucessMessage().should('exist').and('contain',testdata.validationtexts.successtext);
        registerobj.verifyAccountHeading().should('exist').and('contain',testdata.validationtexts.headertext);
        registerobj.verifyContactDetails().should('exist').and('contain',testdata.validationtexts.contactdetailtext);
    });

})