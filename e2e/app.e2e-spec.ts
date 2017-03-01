import { MaterialTodoappPage } from './app.po';

describe('material-todoapp App', () => {
  let page: MaterialTodoappPage;

  beforeEach(() => {
    page = new MaterialTodoappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
