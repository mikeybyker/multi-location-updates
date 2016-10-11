import { MultiPathPage } from './app.po';

describe('multi-path App', function() {
  let page: MultiPathPage;

  beforeEach(() => {
    page = new MultiPathPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
