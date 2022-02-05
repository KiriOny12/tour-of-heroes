import { browser, element, by } from 'protractor';

export class DashboardPage {
  navigateTo() {
    return browser.get('/');
  }
  findHeroByName(text) {
    return element(by.cssContainingText('.grid.grid-pad > div', text));
  }
  getGridPadElements() {
    return element.all(by.css('.grid.grid-pad > div'));
  }
  searchByName(name) {
    return element(by.css('#search-box')).sendKeys(name);
  }
  openSearchResult() {
    return element(by.css('div.search-result')).click();
  }
  switchOn(text) {
    return element(by.cssContainingText('nav > a', text)).click();
  }
}
