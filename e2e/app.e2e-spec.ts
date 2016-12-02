import { GanttPage } from './app.po';

describe('gantt App', function() {
  let page: GanttPage;

  beforeEach(() => {
    page = new GanttPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
