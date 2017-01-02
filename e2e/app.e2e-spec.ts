import { OnwardPage } from './app.po';

describe('onward App', function() {
  let page: OnwardPage;

  beforeEach(() => {
    page = new OnwardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
