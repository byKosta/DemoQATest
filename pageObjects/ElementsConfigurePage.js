

class HeaderAndFooter {
    getCheckBox = () => cy.get('contains("Check Box")')






    typyCheckBox(name) {
        this.getCheckBox().type(name);
        return this;
    }



    clickCheckBox() {
        this.getCheckBox().click();
        return new CheckBoxPage(); 
    }

    }

export default HeaderAndFooter;