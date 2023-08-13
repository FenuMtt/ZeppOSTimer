import { gettext } from "i18n"

export const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = hmSetting.getDeviceInfo()

export const LIST_PARAMS = {
  x: 0,
  y: 0,
  h: DEVICE_HEIGHT,
  w: DEVICE_WIDTH,
  item_space: 4,
  item_config: [
    {
      type_id: 1,
      item_bg_color: 0x211154,
      item_bg_radius: 10,
      text_view: [
        { x: 0, y: 0, w: 194, h: 50, key: 'name', color: 0xffffff, text_size: 16 }
      ],
      text_view_count: 1,
      item_height: 50
    }
  ],
  item_config_count: 1,
}