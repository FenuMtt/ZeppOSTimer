import { seedFS } from './utils/seed';

App({
  globalData: {
  },
  onCreate(options) {
    seedFS();
  },

  onDestroy(options) {
  }
});

