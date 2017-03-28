import { ReomPage } from './app.po';

describe('reom App', function() {
  let page: ReomPage;

  beforeEach(() => {
    page = new ReomPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
