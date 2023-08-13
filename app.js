import { seedFS } from './utils/seed'

App({
  globalData: {},
  onCreate(options) {
    console.log('app on create invoke')
    seedFS()
  },

  onDestroy(options) {
    console.log('app on destroy invoke')
  }
})
