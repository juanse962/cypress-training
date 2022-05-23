/* eslint-disable require-jsdoc */

class LoginPage {
  private addUser: string;
  private addPass: string;
  private submit: string;

  constructor() {
    this.addUser = "#email";
    this.addPass = "#passwd";
    this.submit = "#SubmitLogin";
  }

  public login(email: string, password: string): void {
    cy.get(this.addUser).type(email);
    cy.get(this.addPass).type(password);
    cy.get(this.submit).click();
  }
}

export { LoginPage };
