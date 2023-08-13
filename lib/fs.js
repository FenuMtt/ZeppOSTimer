const logger = DeviceRuntimeCore.HmLogger.getLogger('fs.js');

/**
 * Converts array buffer to string
 * @param {ArrayBuffer} buffer
 * @return {string}
 */
function ab2str(buffer) {
  return String.fromCharCode.apply(null, new Uint16Array(buffer));
}

/**
 * Converts string to buffer
 * @param {string} str
 * @return {ArrayBuffer}
 */
function str2ab(str) {
  const buf = new ArrayBuffer(str.length * 2); // 2 bytes for each char
  const bufView = new Uint16Array(buf);
  for (let i = 0, strLen = str.length; i < strLen; i++) {
    bufView[i] = str.charCodeAt(i);
  }
  return buf;
}

/**
 * Get metadata of a file.
 * @param {string} filename
 * @return {(number|number)}
 */
export function statSync(filename) {
  logger.debug('statSync', filename);
  const [fsStat, err] = hmFS.stat(filename);
  logger.debug('res', fsStat, err);
  if (err == 0) {
    logger.debug('fs--->size:', fsStat.size);
    return fsStat;
  } else {
    logger.debug('fs--->err:', err);
    return null;
  }
}

/**
 * Write data to a file in a single operation.
 * If a file with that name already exists, it is overwritten; otherwise, a new file is created.
 * @param {*} filename
 * @param {*} data
 * @param {*} options
 */
export function writeFileSync(filename, data, options) {
  logger.debug('writeFileSync begin -->', filename);

  const stringBuffer = str2ab(data);
  const sourceBuf = new Uint8Array(stringBuffer);

  const file = hmFS.open(filename, hmFS.O_CREAT | hmFS.O_RDWR | hmFS.O_TRUNC);
  logger.debug('writeFileSync file open success -->', file);
  hmFS.seek(file, 0, hmFS.SEEK_SET);
  hmFS.write(file, sourceBuf.buffer, 0, sourceBuf.length);
  hmFS.close(file);
  logger.debug('writeFileSync success -->', filename);
}

/**
 * Read an entire file into a buffer in a single operation.
 * @param {*} filename
 * @param {*} options
 * @return {string}
 */
export function readFileSync(filename, options) {
  logger.debug('readFileSync fiename:', filename);

  const fsStat = statSync(filename);
  if (!fsStat) return undefined;

  const destinationBuf = new Uint8Array(fsStat.size);
  const file = hmFS.open(filename, hmFS.O_RDONLY);

  hmFS.seek(file, 0, hmFS.SEEK_SET);
  hmFS.read(file, destinationBuf.buffer, 0, fsStat.size);
  hmFS.close(file);

  const content = ab2str(destinationBuf.buffer);
  logger.debug('readFileSync', content);
  return content;
}

/**
 * Delete a file.
 * @param {*} filename
 * @return {number}
 */
export function unlinkSync(filename) {
  logger.debug('unlinkSync begin -->', filename);
  const result = hmFS.remove(filename);
  logger.debug('unlinkSync result -->', result);
  return result;
}

/**
 * Rename a file.
 * @param {string} oldFilename
 * @param {string} newFilename
 */
export function renameSync(oldFilename, newFilename) {
  logger.debug('renameSync begin -->', filename);
  hmFS.rename(oldFilename, newFilename);
  logger.debug('renameSync success -->', filename);
}

/**
 * Synchronously creates a directory.
 * @param {*} path
 * @param {*} options
 */
export function mkdirSync(path, options) {
  logger.log('mkdirSync begin -->', path);
  hmFS.mkdir(path);
  logger.log('mkdirSync success -->', path);
}

/**
 * Reads the contents of the directory.
 * @param {*} path
 * @param {*} options
 */
export function readdirSync(path, options) {
  logger.log('readdirSync begin -->', path);
  hmFS.readdirSync(path);
  logger.log('readdirSync success -->', path);
}
