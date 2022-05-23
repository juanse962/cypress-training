/* eslint-disable require-jsdoc */

import {
  MenuContentPage,
  ProductListPage,
  ShoppingCartPage,
  LoginPage,
  AddressStepPage,
  ShipingStepPage,
  PaymentStepPage,
} from "../page/index";

describe("Buy a t-shirt", () => {
  let menuContentPage: MenuContentPage;
  let productListPage: ProductListPage;
  let shoppingCartPage: ShoppingCartPage;
  let loginPage: LoginPage;
  let addressStepPage: AddressStepPage;
  let shippingPage: ShipingStepPage;
  let paymentPage: PaymentStepPage;

  before(() => {
    menuContentPage = new MenuContentPage();
    productListPage = new ProductListPage();
    shoppingCartPage = new ShoppingCartPage();
    loginPage = new LoginPage();
    addressStepPage = new AddressStepPage();
    shippingPage = new ShipingStepPage();
    paymentPage = new PaymentStepPage();
  });

  it("then the t-shirt should be bought", () => {
    // Arrange
    const message = "Your order on My Store is complete.";
    const product = "Faded Short Sleeve T-shirts";
    const user = "aperdomobo@gmail.com";
    const pass = "WorkshopProtractor";
    menuContentPage.visitMenuContentPage();

    // Action
    menuContentPage.goToTShirtMenu();
    productListPage.addTShirtToCart(product);
    shoppingCartPage.visitMenuShoppingCarte();
    loginPage.login(user, pass);
    addressStepPage.visitAddressCheckOut();
    shippingPage.visitAddShiping();
    paymentPage.visitOrder();

    // Assert
    paymentPage.verifyConfirmationMessage(message);
  });
});
