/* eslint-disable require-jsdoc */

class UploadFilePage {
  private uploadUrlPage: string;
  private browse: string;
  private uploadbtn: string;
  private titleFile: string;

  constructor() {
    this.uploadUrlPage = "demo.automationtesting.in/FileUpload.html";
    this.browse = "#input-4";
    this.uploadbtn = "button[title = 'Upload selected files']";
    this.titleFile = ".file-footer-caption";
  }

  public visitUploadPage(): void {
    cy.visit(this.uploadUrlPage);
  }
  public uploadFile(FileUpload: string): void {
    cy.get(this.browse).attachFile(FileUpload);
    cy.get(this.uploadbtn).click();
  }

  public verifyUploadedFile(textFile: string) {
    return cy.get(this.titleFile).should(($lis) => {
      expect($lis.eq(1)).to.contain(textFile);
    });
  }
}

export { UploadFilePage };
