/* eslint-disable require-jsdoc */

class DownloadFilePage {
  private pageURL: string;
  private downloadTxtFile: string;
  private generateTxtFile: string;
  private TxtDownloadButton: string;

  private downloadPdfFile   : string;
  private generatePdfFile: string;
  private TxtDownPdfButton: string;

  constructor() {
    this.pageURL = "http://demo.automationtesting.in/FileDownload.html";
    this.downloadTxtFile = "#textbox";
    this.generateTxtFile = "#createTxt";
    this.TxtDownloadButton = "#link-to-download";
    this.downloadPdfFile     = "#pdfbox";
    this.generatePdfFile = "#createPdf";
    this.TxtDownPdfButton = "#pdf-link-to-download";
  }

  visitDownloadPage() {
    cy.visit(this.pageURL);
  }

  txtContent(content: string) {
    cy.get(this.downloadTxtFile).type(content);
  }

  downloadTxtContent() {
    cy.get(this.generateTxtFile).click();
    cy.get(this.TxtDownloadButton).click();
  }

  pdfContent(content: string) {
    cy.get(this.downloadPdfFile ).type(content);
  }

  downloadPdfContent() {
    cy.get(this.generatePdfFile).click();
    cy.get(this.TxtDownPdfButton).click();
  }

  verifyDownloatedContent(path: string): any {
    return cy.readFile(path);
  }
}

export { DownloadFilePage };
