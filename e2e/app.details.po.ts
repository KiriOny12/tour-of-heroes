import { element, by } from 'protractor';

export class DetailsPage {

  getNameInputElement() {
    return element(by.css('[placeholder="name"]'));
  }

  getBackBtnElement() {
    return element.all(by.css('my-hero-detail > div  > button')).first();
  }

  getSaveBtnElement() {
    return element.all(by.css('my-hero-detail > div  > button')).last();
  }
}


