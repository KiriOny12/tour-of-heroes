import {element, by, browser} from 'protractor';

export class HeroesPage {

  navigateTo() {
    return browser.get('/heroes');
  }

  addHeroes(count, name) {
    for (let i = 0; i < count; ++i) {
      element(by.css('my-heroes > button')).click();
      element(by.css('div > input')).sendKeys(name);
      element.all(by.css('my-hero-detail > div > button')).last().click();
    }
  }

  clickSave() {
    return element.all(by.css('my-hero-detail > div > button')).last().click();
  }

  fillInput(text) {
     return element(by.css('div > input')).sendKeys(text);
  }

  findHeroByName(name) {
    return element(by.cssContainingText('my-heroes > .heroes > li', name));
  }

  deleteHeroes(count) {
    return element.all(by.css('li > .delete-button')).then(function (items) {
      for (let i = 0; i < count; ++i) {items[i].click(); }
    });
  }

  getHeroesElements() {
    return element.all(by.css('my-heroes > .heroes > li'));
  }

  clickAdd() {
    return  element(by.css('my-heroes > button')).click();
  }

  clickViewDetail() {
    return element.all(by.css('div > button')).first().click();
  }
}


