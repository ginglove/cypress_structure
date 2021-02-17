/// <reference types="cypress" />



class common{
        openURL(URL){
            try {
                cy.visit(URL);
                console.log("Open URL "+URL+" successfully");
            } catch (error) {
                console.error("Cannot open URL due to : "+error);
            }
        }
        findElement (eXpath){
            const element=null;
            try {
                element=cy.get(eXpath);
                console.log("Find Xpath with : "+eXpath+ " successfully");
            } catch (error) {
                console.error("Cannot find element due to : "+error);
            }
            return element;
        }
        clickElement (eXpath){
            try{
                cy.get(eXpath).should('be.visible').click();
                console.log("Click Element with : "+eXpath+ " successfully");
            }
            catch(error){
                console.error("Cannot click to element due to : "+error);
            }
        } 
        inputIntoElement (eXpath,value){
            try{
                //cy.xpath(eXpath).should('be.visible').type(value);
                cy.get(eXpath).should('be.visible').type(value);
                console.log("Input value "+value+" Element with : "+eXpath+ " successfully");
            }
            catch(error){
                console.error("Cannot input into Element due to : "+error);
            }           
        }
    }

export default common