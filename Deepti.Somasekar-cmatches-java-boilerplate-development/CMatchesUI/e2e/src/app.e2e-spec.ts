import { AppPage } from './app.po';
import { browser, by, element, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to CMatchesUI!');
  });

  it('should be redirected to /register route', () => {
    browser.element(by.css('.register-button')).click();
    expect(browser.getCurrentUrl()).toContain('/register');
    browser.driver.sleep(2000);
  });

  it('should be able to register user', () => {
    browser.element(by.id('username')).sendKeys('testnow');
    browser.driver.sleep(500);
    browser.element(by.id('email')).sendKeys('testnow');
    browser.driver.sleep(500);
    browser.element(by.id('password')).sendKeys('testnow');
    browser.driver.sleep(500);
    browser.element(by.css('.register-user')).click();
    expect(browser.getCurrentUrl()).toContain('/login');
    browser.driver.sleep(1000);
  });

  it('should be able to login user', () => {
    browser.element(by.id('username')).sendKeys('testnow');
    browser.driver.sleep(500);
    browser.element(by.id('password')).sendKeys('testnow');
    browser.driver.sleep(500);
    browser.element(by.css('.login-click')).click();
    expect(browser.getCurrentUrl()).toContain('/dashboard');
    browser.driver.sleep(1000);
});

it('should be able to logout from application', () => {
  browser.driver.sleep(1000);
  browser.element(by.css('.mat-button-logout')).click();
  browser.driver.sleep(1000);
  expect(browser.getCurrentUrl()).toContain('/login');
});

});
