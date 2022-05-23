/* eslint-disable require-jsdoc */

import {
  MenuContentPage,
  DressesListPage,
} from "../page/index";

describe("the user navigates to the dresses page should", () => {
  let menuContentPage: MenuContentPage;
  let dressesListPage: DressesListPage;
  let allDresses: string[];

  before(() => {
    menuContentPage = new MenuContentPage();
    dressesListPage = new DressesListPage();
    allDresses = [
      "Printed Dress",
      "Printed Dress",
      "Printed Summer Dress",
      "Printed Summer Dress",
      "Printed Chiffon Dress",
    ];
  });

  it("show the available dresses", () => {
    // Arrange
    menuContentPage.visitMenuContentPage();

    // Action
    menuContentPage.goDressesMenu();
    dressesListPage.getDressProducts();

    // Assert
    dressesListPage.validateItemsNumber(allDresses.length);
    dressesListPage.validateItemsNames(allDresses);
  });
});
