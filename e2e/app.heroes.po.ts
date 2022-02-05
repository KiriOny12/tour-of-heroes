import {element, by, browser} from 'protractor';

export class HeroesPage {

  navigateTo() {
    return browser.get('/heroes');
  }

  getSaveBtn() {
    return element.all(by.css('my-hero-detail > div > button')).last().getWebElement();
  }

  getInput() {
    return element(by.css('div > input')).getWebElement();
  }

  getHeroesElementByPartName(text) {
    return element(by.cssContainingText('my-heroes > .heroes > li', text));
  }

  getHeroesDeleteBtn() {
    return element.all(by.css('li > .delete-button')).getWebElements();
  }

  getHeroesElements() {
    return element.all(by.css('my-heroes > .heroes > li'));
  }

  getAddNewHeroesBtn() {
    return element(by.css('my-heroes > button'));
  }

  getViewDetailsBtn() {
    return element.all(by.css('div > button')).first();
  }
}


