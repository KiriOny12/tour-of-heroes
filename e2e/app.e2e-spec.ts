import {DashboardPage} from './app.dashboard.po';
import {browser} from 'protractor';
import {HeroesPage} from './app.heroes.po';
import {DetailsPage} from './app.details.po';

declare const allure: any;


describe('App Tour Of Heroes', () => {
  let dashboardPage: DashboardPage;
  let heroesPage: HeroesPage;
  let detailsPage: DetailsPage;

  beforeEach(() => {
    dashboardPage = new DashboardPage();
    heroesPage = new HeroesPage();
    detailsPage = new DetailsPage();
  });

  it('Should display edited name on blank and My Heroes page',  () => {
    heroesPage.navigateTo();
    heroesPage.getHeroesElementByPartName('Narco').click();
    heroesPage.getViewDetailsBtn().click();
    detailsPage.getNameInputElement().sendKeys('1');
    detailsPage.getSaveBtnElement().click();
    browser.sleep(2000)
    expect(heroesPage.getHeroesElementByPartName('Narco1').isPresent()).toBe(true);
    dashboardPage.getPageSwitchByName('Dashboard').click();
    browser.sleep(2000)
    expect(dashboardPage.getHeroesElementByPartName('Narco1').isPresent()).toBe(true);
  });

  it('should display ten hero on My Heroes page', () => {
    heroesPage.navigateTo();
    expect(heroesPage.getHeroesElements().count()).toBe(10);
  });

  it('should displayed four hero in Top hero section',  () => {
    dashboardPage.navigateTo();
    expect(dashboardPage.getGridPadElements().count()).toBe(4);
  });

  it('should have id of the hero in the url on hero detailed page',  () => {
    heroesPage.navigateTo();
    heroesPage.getHeroesElements().first().click();
    heroesPage.getViewDetailsBtn().click();
    browser.sleep(2000);
    expect(browser.getCurrentUrl()).toEqual('http://localhost:4200/detail/11');
  });

  it('should delete and add five hero',  () => {
    heroesPage.navigateTo();
    heroesPage.getHeroesDeleteBtn().then(function (items) {
      for (let i = 0; i < 5; ++i) {items[i].click();}
    });
    expect(heroesPage.getHeroesElements().count()).toBe(5)
    for (let i = 0; i < 5; ++i) {
      heroesPage.getAddNewHeroesBtn().click();
      heroesPage.getInput().sendKeys('Hero');
      heroesPage.getSaveBtn().click();
    }
    expect(heroesPage.getHeroesElements().count()).toBe(10)
  });

  it('Search hero by name',  () => {
    dashboardPage.navigateTo();
    dashboardPage.getSearchInput().sendKeys('Narco');
    dashboardPage.getSearchResult().click();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:4200/detail/12');
  });

  // afterEach(async function () {
  //   const png = await browser.takeScreenshot();
  //   allure.createAttachment('Screenshot', new Buffer(png, 'base64'), 'image/png');
  // })
});
