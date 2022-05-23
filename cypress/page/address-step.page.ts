/* eslint-disable require-jsdoc */

class AddressStepPage {
  private addCheckOutProccess: string;

  constructor() {
    this.addCheckOutProccess = "button[name='processAddress']";
  }

  public visitAddressCheckOut(): void {
    cy.get(this.addCheckOutProccess).click();
  }
}

export { AddressStepPage };
