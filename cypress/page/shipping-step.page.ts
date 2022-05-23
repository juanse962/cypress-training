/* eslint-disable require-jsdoc */

class ShipingStepPage {
  private addContinueProcess: string;
  private addCheck: string;

  constructor() {
    this.addContinueProcess = "button[name='processCarrier']";
    this.addCheck = "#cgv";
  }

  public visitAddShiping(): void {
    cy.get(this.addCheck).click();
    cy.get(this.addContinueProcess).click();
  }
}

export { ShipingStepPage };
