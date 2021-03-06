var sendCommand = require('./television.sendCommand.js');

/**
 * @public
 * @name gladys.television.programMinus
 * @description You can put the devicetype attribute OR the room attribute to determine in which room you want to control the television/which precise deviceType is playing.
 * @param {Object} params
 * @param {Integer} params.devicetype The id of the deviceType
 * @param {Integer} params.room The id of the room
 * @example
 * var params = {
 *      devicetype : 1 // or room
 * }
 * 
 * gladys.television.programMinus(params)
 */

module.exports = function programMinus(params) {
  return sendCommand('programMinus', params);
};