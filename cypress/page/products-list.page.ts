/* eslint-disable require-jsdoc */

class ProductListPage {
  private addProduct: string;
  private productsName: string;

  constructor() {
    this.addProduct = ".ajax_add_to_cart_button";
    this.productsName = ".product-container";
  }
  private findProductByName(name: string): any {
    return cy.get(this.productsName).filter(`:contains("${name}")`);
  }
  public addTShirtToCart(product: string): void {
    this.findProductByName(product).find(this.addProduct).click();
  }
}

export { ProductListPage };
