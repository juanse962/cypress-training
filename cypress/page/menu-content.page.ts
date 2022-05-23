/* eslint-disable require-jsdoc */

class MenuContentPage {
  private tShirtMenu: string;
  private menuContentPageURL: string;
  private dressesMenu: string;

  constructor() {
    this.tShirtMenu = ".sf-menu > li > [title='T-shirts']";
    this.menuContentPageURL = "http://automationpractice.com/";
      this.dressesMenu = ".sf-menu > li > [title=Dresses]";

  }

  public visitMenuContentPage(): void {
    cy.visit(this.menuContentPageURL);
  }

  public goToTShirtMenu(): void {
    cy.get(this.tShirtMenu).click();
  }
  public goDressesMenu(): void {
    cy.get(this.dressesMenu).click();
  }
}

export { MenuContentPage };
