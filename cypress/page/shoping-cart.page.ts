/* eslint-disable require-jsdoc */

class ShoppingCartPage {
  private shoppingMenuCart: string;
  private shoppingCart: string;
  private checkoutProcess: string;

  constructor() {
    this.shoppingMenuCart = "#layer_cart";
    this.shoppingCart = "a[title='Proceed to checkout']";
    this.checkoutProcess = ".clearfix > a[title='Proceed to checkout']";
  }

  public visitMenuShoppingCarte(): void {
    cy.get(this.shoppingMenuCart).click();
    cy.get(this.shoppingCart).click();
    cy.get(this.checkoutProcess).click();
  }
}

export { ShoppingCartPage };
