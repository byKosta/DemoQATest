import ElementsConfigurePage  from './ElementsConfigurePage';


class HeaderAndFooter {
    getElementsBtn = () => cy.visit('https://demoqa.com/'); 
    clickElementsBtn = () => cy.get('contains("Elements")');

    



    clickElementsBtn() {
    clickElementsBtn = () => this.getElementsBtn().click();
    return this;
    }

    selectCheckBox() {
        this.getCheckBox().click();
        return new CheckBoxPage();
    }


}
export default HeaderAndFooter;