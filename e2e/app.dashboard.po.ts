import { browser, element, by } from 'protractor';

export class DashboardPage {
  navigateTo() {
    return browser.get('/');
  }
  getHeroesElementByPartName(text) {
    return element(by.cssContainingText('.grid.grid-pad > div', text));
  }
  getParagraphText() {
    return element(by.css('my-root h1')).getText();
  }
  getTitleText() {
    return element(by.css('my-dashboard > h3')).getText();
  }
  getGridPadElements() {
    return element.all(by.css('.grid.grid-pad > div'));
  }
  getSearchTitle() {
    return element(by.css('#search-component > h4')).getText();
  }
  getSearchInput() {
    return element(by.css('#search-box'));
  }
  getSearchResult() {
    return element(by.css('div.search-result'));
  }
  getPageSwitchByName(text) {
    return element(by.cssContainingText('nav > a', text));
  }
}
