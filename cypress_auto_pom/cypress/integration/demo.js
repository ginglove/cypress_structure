/// <reference types="cypress" />
import common from './Commons/common.js';

describe('Sign In', () => {
    it('should show an error message on empty input', () => {
        var URL="https://google.com.vn"
        const cst_common= new common();
        cst_common.openURL(URL);
        cst_common.inputIntoElement('input[name="q"]','Q')
        
        //cy.visit(URL);
    })

})
