import { writeFileSync, readFileSync } from '../lib/fs'

const logger = DeviceRuntimeCore.HmLogger.getLogger('storage.js')
const storageFileName = 'data.json'

export function readFromFS() {
  data = readFileSync(storageFileName, {})
  return JSON.parse(data)
}

export function writeToFS(data) {
  values = JSON.stringify(data)
  writeFileSync(storageFileName, values, {})
}