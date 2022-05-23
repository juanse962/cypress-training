/* eslint-disable require-jsdoc */

interface PersonalInform {
  name: string;
  lastName: string;
  email: string;
  gender: string;
  mobileNumber: string;
  hobbies: string[];
  subject: string;
  currentAddress: string;
  state: string;
  city: string;
}

class PersonalPage {
  private toolsQaFormURL: string;
  private firstName: string;
  private lastName: string;
  private email: string;
  private gender: string;
  private mobileNumber: string;
  private hobbies: string;
  private subject: string;
  private currentAddresss: string;
  private submit: string;
  private confirmationModalTitle: string;
  private state: string;
  private city: string;
  private stateAndCityModal: string;

  constructor() {
    this.toolsQaFormURL = "https://demoqa.com/automation-practice-form";
    this.firstName = "#firstName";
    this.lastName = "#lastName";
    this.email = "#userEmail";
    this.gender = "#genterWrapper input";
    this.mobileNumber = "#userNumber";
    this.hobbies = "#hobbiesWrapper .col-md-9";
    this.subject = ".subjects-auto-complete__value-container";
    this.currentAddresss = "#currentAddress";
    this.state = "#state";
    this.city = "#city";
    this.submit = "#userForm";
    this.confirmationModalTitle = ".modal-title";
    this.stateAndCityModal = "State and City";
  }

  public verifyConfirmationPageTitle(message: string): any {
    return cy.get(this.confirmationModalTitle).should("have.text", message);
  }

  public verifyStateAndCity(stateModal: string, cityModal: string): any {
    return cy
      .contains("td", this.stateAndCityModal)
      .next()
      .should("have.text", `${stateModal} ${cityModal}`);
  }
  public findGender(gender: string): any {
    return cy
      .get(this.gender)
      .filter(`[value="${gender}"]`)
      .check({ force: true });
  }

  private findHobbiesByName(hobbies: string[]): any {
    hobbies.forEach((hobby) => {
      cy.get(this.hobbies).find(`label:contains("${hobby}")`).click();
    });
  }

  public visitToolsQAForm(): void {
    cy.visit(this.toolsQaFormURL);
  }

  public fillForm(personalInform: PersonalInform): void {
    cy.get(this.firstName).type(personalInform.name);
    cy.get(this.lastName).type(personalInform.lastName);
    cy.get(this.email).type(personalInform.email);
    this.findGender(personalInform.gender);
    cy.get(this.mobileNumber).type(personalInform.mobileNumber);
    this.findHobbiesByName(personalInform.hobbies);
    cy.get(this.currentAddresss).type(personalInform.currentAddress);
    cy.get(this.state).click().type(`${personalInform.state}{enter}`);
    cy.get(this.city).click().type(`${personalInform.city}{enter}`);
    cy.get(this.subject).type(`${personalInform.subject}{enter}`);
    cy.get(this.submit).submit();
  }
}

export { PersonalPage };
