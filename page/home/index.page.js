import { DEVICE_HEIGHT, DEVICE_WIDTH, LIST_PARAMS } from './index.style'
import { readFromFS } from '../../utils/storage'

const logger = DeviceRuntimeCore.HmLogger.getLogger('helloworld!')

Page({
  state: {

  },

  onInit() {
    logger.debug('page onInit invoked!!')
  },

  build() {

    logger.debug('page build invoked ')
    readFromFS();
    
    const dataList = [
      { name: 'pull ups' },
      { name: 'hangs' },
      { name: 'other shit' }
    ]
    
    function scrollListItemClick(list, index) {
      console.log('scrollListItemClick index=' + index)
    }

    hmUI.createWidget(hmUI.widget.SCROLL_LIST, {
      ...LIST_PARAMS,
      data_array: dataList,
      data_count: dataList.length,
      item_click_func: scrollListItemClick,
    })
  },
  

  onDestroy() {
    logger.debug('page onDestroy invoked')
  },
})