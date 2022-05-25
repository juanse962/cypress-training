/* eslint-disable require-jsdoc */

import { IframePage } from "../page/index";

describe("the user navigates to the Iframe  page should", () => {
  let iframePage: IframePage;

  before(() => {
    iframePage = new IframePage();
  });

  it("should be able to see the HTML tutorial in the iframe", () => {
    // Arrange
    const titleHtmlFrame = "HTML Tutorial";
    iframePage.visit();
    // Action
    iframePage.goToHtmlPageInFrame();
    // Asserts
    iframePage.verifyTitle(titleHtmlFrame);
  });

  it("should navigates to the CSS Tutorial page in the iframe", () => {
    // Arrange
    const titleCssFrame = "CSS Tutorial";
    iframePage.visit();
    // Action
    iframePage.goToCssPageInFrame();
    // Asserts
    iframePage.verifyTitle(titleCssFrame);
  });
});
