import { LIST_PARAMS } from './index.style';
// import {readFromFS} from '../../utils/storage';

const logger = DeviceRuntimeCore.HmLogger.getLogger('page_index');

/**
 * On item click handler
 * @param {*} list scroll list object
 * @param {*} index selected item index
 */
function scrollListItemClick(list, index) {
  logger.log('scrollListItemClick index=' + index);
}

Page({
  state: {
  },

  onInit() {
  },

  build() {
    const dataList = [
      {
        name: 'pull ups'
      },
      {
        name: 'hangs'
      },
      {
        name: 'other shit'
      }
    ];


    hmUI.createWidget(hmUI.widget.SCROLL_LIST, {
      ...LIST_PARAMS,
      data_array: dataList,
      data_count: dataList.length,
      item_click_func: scrollListItemClick
    });
  },

  onDestroy() {
  }
});
