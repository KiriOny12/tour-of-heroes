import { element, by } from 'protractor';

export class DetailsPage {

  enterName(name) {
    return element(by.css('[placeholder="name"]')).sendKeys(name);
  }

  clickSave() {
    return element.all(by.css('my-hero-detail > div  > button')).last().click();
  }
}


