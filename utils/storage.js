import { writeFileSync, readFileSync } from '../lib/fs';

// eslint-disable-next-line no-unused-vars
const logger = DeviceRuntimeCore.HmLogger.getLogger('storage.js');
const storageFileName = 'data.json';

/**
 * Load user data from the filesystem
 *
 * @return {object}
 */
export function readFromFS() {
  data = readFileSync(storageFileName, {});
  return JSON.parse(data);
}

/**
 * Save user data from the filesystem
 *
 * @param {object} data
 */
export function writeToFS(data) {
  values = JSON.stringify(data);
  writeFileSync(storageFileName, values, {});
}
