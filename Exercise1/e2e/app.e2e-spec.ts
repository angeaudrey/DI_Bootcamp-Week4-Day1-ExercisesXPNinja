import { ExerciseXPNINJAPage } from './app.po';

describe('exercise-xpninja App', function() {
  let page: ExerciseXPNINJAPage;

  beforeEach(() => {
    page = new ExerciseXPNINJAPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
