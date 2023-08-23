import { Register } from "../../../pages/Register.po";

const registerobj=new Register();
let testdata;

describe.skip('Register Suite',()=>{

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
        registerobj.validateSucessMessage(testdata.validationtexts.successtext,testdata.validationtexts.headertext,testdata.validationtexts.contactdetailtext);
    });

})