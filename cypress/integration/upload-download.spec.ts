/* eslint-disable require-jsdoc */

import {
  UploadFilePage,
  DownloadFilePage,
} from "../page/index";

describe("the user navigates", () => {
  let uploadPage: UploadFilePage;
  let downloadPage: DownloadFilePage;

  before(() => {
    uploadPage = new UploadFilePage();
    downloadPage = new DownloadFilePage();
  });

  it("User verifies what the file should return", () => {
    // Arrange
    const txtContent = "This sentence must be verified in the TXT file";
    const pdfContent = "Generic text for PDF";
    const txtPath = "cypress/downloads/info.txt";
    const pdfPath = "cypress/downloads/info.pdf";
    downloadPage.visitDownloadPage();
    // Action
    downloadPage.pdfContent(pdfContent);
    downloadPage.downloadPdfContent();
    downloadPage.txtContent(txtContent);
    downloadPage.downloadTxtContent();
    // Assert
    downloadPage.verifyDownloatedContent(pdfPath).should("eq", pdfContent);
    downloadPage.verifyDownloatedContent(txtPath).should("eq", txtContent);
  });

  it("should upload file and verify the file title", () => {
    const fileUpload = "terminal_input_screenshot.PNG";
    const text = fileUpload.slice(0, -4);
    // Arrange
    uploadPage.visitUploadPage();
    // Action
    uploadPage.uploadFile(fileUpload);
    // Asserts
    uploadPage.verifyUploadedFile(text);
  });
});
