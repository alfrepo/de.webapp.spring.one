import { AppPage } from './app.po';
import {browser, by, element} from "protractor";

describe('frontend App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should check the text on the about page', () => {

    // resize the window
    var width = 1200;
    var height = 1000;
    browser.driver.manage().window().setSize(width, height);

    // navigate to the application main page
    browser.get('/');

    // click the menu
    element(by.id('menu-about')).click();

    // check the title of the h1 element
    expect(element(by.css('app-root h1')).getText()).toBe('Welcome to !!!');
  });
});
