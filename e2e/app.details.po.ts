import { element, by } from 'protractor';

export class DetailsPage {

  getNameInputElement() {
    return element(by.css('[placeholder="name"]')).getWebElement();
  }

  getBackBtnElement() {
    return element.all(by.css('my-hero-detail > div  > button')).first().getWebElement();
  }

  getSaveBtnElement() {
    return element.all(by.css('my-hero-detail > div  > button')).last().getWebElement();
  }
}


