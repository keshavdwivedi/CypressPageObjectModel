import { Homepage } from "../../../pages/HomePage.po";
const homeObj=new Homepage();
let homedata;

describe('Homepage Test Suite',()=>{

    before(()=>{
        cy.fixture('home.json').then((home)=>{
        homedata=home;
        });
    });

    beforeEach(()=>{
        homeObj.openURL();
    })

    it('Homepage test 1', () => {
        cy.verifyUrl(homedata.Urlval);
        cy.verifyTitle(homedata.Titleval);
    });

    it('Homepage test 2', () => {
        homeObj.verifybannerImage();
        homeObj.verifylogoImage();
    });

});