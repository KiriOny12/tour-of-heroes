import {BlankPage} from './app.po';
import {browser} from 'protractor';
import {HeroesPage} from './app.heroes';
import {DetailsPage} from './app.details';

declare const allure: any;


describe('App Tour Of Heroes', () => {
  let blank: BlankPage;
  let heroes: HeroesPage;
  let details: DetailsPage;

  beforeEach(() => {
    blank = new BlankPage();
    heroes = new HeroesPage();
    details = new DetailsPage();
  });

  it('Should display edited name on blank and My Heroes page',  () => {
    browser.get('/heroes');
    heroes.getHeroesElementByPartName('Narco').click();
    heroes.getViewDetailsBtn().click();
    details.getNameInputElement().sendKeys('1');
    details.getSaveBtnElement().click();
    browser.sleep(2000)
    expect(heroes.getHeroesElementByPartName('Narco1').isPresent()).toBe(true);
    blank.getPageSwitchByName('Dashboard').click();
    browser.sleep(2000)
    expect(blank.getHeroesElementByPartName('Narco1').isPresent()).toBe(true);
  });

  it('should display ten hero on My Heroes page', () => {
    browser.get('/heroes');
    expect(heroes.getHeroesElements().count()).toBe(10);
  });

  it('should displayed four hero in Top hero section',  () => {
    blank.navigateTo();
    expect(blank.getGridPadElements().count()).toBe(4);
  });

  it('should have id of the hero in the url on hero detailed page',  () => {
    browser.get('/heroes');
    heroes.getHeroesElements().first().click();
    heroes.getViewDetailsBtn().click();
    browser.sleep(2000);
    expect(browser.getCurrentUrl()).toEqual('http://localhost:4200/detail/11');
  });

  it('should delete and add five hero',  () => {
    browser.get('/heroes');
    heroes.getHeroesDeleteBtn().then(function (items) {
      for (let i = 0; i < 5; ++i) {items[i].click();}
    });
    expect(heroes.getHeroesElements().count()).toBe(5)
    for (let i = 0; i < 5; ++i) {
      heroes.getAddNewHeroesBtn().click();
      heroes.getInput().sendKeys('Hero');
      heroes.getSaveBtn().click();
    }
    expect(heroes.getHeroesElements().count()).toBe(10)
  });

  it('Search hero by name',  () => {
    blank.navigateTo();
    blank.getSearchInput().sendKeys('Narco');
    blank.getSearchResult().click();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:4200/detail/12');
  });

  // afterEach(async function () {
  //   const png = await browser.takeScreenshot();
  //   allure.createAttachment('Screenshot', new Buffer(png, 'base64'), 'image/png');
  // })
});
