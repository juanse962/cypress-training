/* eslint-disable require-jsdoc */

class IframePage {
  private urlPage: string;
  private iframeSelector: string;
  private cssLink: string;
  private cssUrl: string;
  private titlepage: string;

  constructor() {
    this.urlPage = "https://www.w3schools.com/html/html_iframe.asp";
    this.iframeSelector = "[title='W3Schools HTML Tutorial']";
    this.cssLink = "[title='CSS Tutorial']";
    this.cssUrl = "https://www.w3schools.com/css/default.asp";
    this.titlepage = "h1";
  }

  public visit(): void {
    cy.visit(this.urlPage);
  }
  public goToHtmlPageInFrame(): any {
    return cy.iframe(this.iframeSelector);
  }
  public verifyTitle(title: string): any {
    return this.goToHtmlPageInFrame()
      .find(this.titlepage)
      .its(0)
      .should("have.text", title);
  }

  public goToCssPageInFrame(): any {
    cy.iframe(this.iframeSelector).find(this.cssLink).click();
    cy.frameLoaded(this.iframeSelector, {
      url: this.cssUrl,
    });
  }
}

export { IframePage };
