import { VinqbotwebPage } from './app.po';

describe('vinqbotweb App', () => {
  let page: VinqbotwebPage;

  beforeEach(() => {
    page = new VinqbotwebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
