import {DashboardPage} from './app.dashboard.po';
import {browser, protractor} from 'protractor';
import {HeroesPage} from './app.heroes.po';
import {DetailsPage} from './app.details.po';

declare const allure: any;


describe('App Tour Of Heroes', () => {
  let dashboardPage: DashboardPage;
  let heroesPage: HeroesPage;
  let detailsPage: DetailsPage;
  const EC = protractor.ExpectedConditions;

  beforeEach(() => {
    dashboardPage = new DashboardPage();
    heroesPage = new HeroesPage();
    detailsPage = new DetailsPage();
  });

  it('Should display edited name on blank and My Heroes page',  () => {
    heroesPage.navigateTo();
    heroesPage.findHeroByName('Narco').click();
    heroesPage.clickViewDetail();
    detailsPage.enterName('1');
    detailsPage.clickSave();
    browser.wait(EC.urlContains('/heroes'), 5000, 'url heroes err');
    expect(heroesPage.findHeroByName('Narco1').isPresent()).toBe(true);
    heroesPage.switchOn('Dashboard');
    browser.wait(EC.urlContains('/'), 5000, 'url dashboard err');
    expect(dashboardPage.findHeroByName('Narco1').isPresent()).toBe(true);
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
    heroesPage.clickViewDetail();
    browser.wait(EC.urlContains('/detail'), 5000, 'url detail err');
    expect(browser.getCurrentUrl()).toEqual('http://localhost:4200/detail/11');
  });

  it('should delete and add five hero',  () => {
    heroesPage.navigateTo();
    heroesPage.deleteHeroes(5);
    expect(heroesPage.getHeroesElements().count()).toBe(5)
    heroesPage.addHeroes(5, 'Hero')
    expect(heroesPage.getHeroesElements().count()).toBe(10)
  });

  it('Search hero by name',  () => {
    dashboardPage.navigateTo();
    dashboardPage.searchByName('Narco');
    dashboardPage.openSearchResult();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:4200/detail/12');
  });

  // afterEach(async function () {
  //   const png = await browser.takeScreenshot();
  //   allure.createAttachment('Screenshot', new Buffer(png, 'base64'), 'image/png');
  // })
});
