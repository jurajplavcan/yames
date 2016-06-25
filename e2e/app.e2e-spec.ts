import { YamesPage } from './app.po';

describe('yames App', function() {
  let page: YamesPage;

  beforeEach(() => {
    page = new YamesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
