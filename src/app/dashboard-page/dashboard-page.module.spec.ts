import { DashboardPageModule } from './dashboard-page.module';

describe('DashboardPageModule', () => {
  let dashboardPageModule: DashboardPageModule;

  beforeEach(() => {
    dashboardPageModule = new DashboardPageModule();
  });

  it('should create an instance', () => {
    expect(dashboardPageModule).toBeTruthy();
  });
});
