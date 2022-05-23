/* eslint-disable require-jsdoc */

import {UploadFilePage} from "../page/index";

describe("the user navigates", () => {
  let fileUpload: string;
  let text: string;
  let uploadPage: UploadFilePage;

  before(() => {
    uploadPage = new UploadFilePage();
  });

  it("should upload file and verify the file title", () => {
    fileUpload = "terminal_input_screenshot.png";
    text = fileUpload.slice(0, fileUpload.length - 4);
    // Arrange
    uploadPage.visitUploadPage();
    // Action
    uploadPage.uploadFile(fileUpload);
    // Asserts
    uploadPage.verifyUploadedFile(text);
  });
});
