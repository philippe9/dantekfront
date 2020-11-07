/**
 * @classdesc Global app loader.
 * @author Melo
 * @version 1.0.0
 * @copyright Melo 2019
 * @name Loader
 */

export class Loader {
  constructor() {}

  /**
   * Landing the global page loader
   */
  static load() {
    document.querySelector('body').style.opacity = '0.7';
    document.getElementById('globalLoader').style.display = 'block';
  }
  static loadBack() {
    document.querySelector('body').style.opacity = '0.7';
  }
  static stoploadingBack() {
    document.querySelector('body').style.opacity = '1';
  }
  /**
   * Removing the global page loader
   */
  static stopLoading() {
    document.querySelector('body').style.opacity = '1';
    document.getElementById('globalLoader').style.display = 'none';
  }
  static stringToBool(body) {
    for (const prop in body) {
      // skip loop if the property is from prototype
      if (!body.hasOwnProperty(prop)) { continue; }
      // console.log(prop + " = " + body[prop]);
      if (body[prop] === '1') {
        body[prop] = true;
      }
      if (body[prop] === '0') {
        body[prop] = false;
      }
    }
    return body;
  }
  static boolToString(body) {
    for (const prop in body) {
      // skip loop if the property is from prototype
      if (!body.hasOwnProperty(prop)) { continue; }
      console.log(prop + ' = ' + body[prop]);
      if (body[prop] === true) {
        body[prop] = '1';
      }
      if (body[prop] === false) {
        body[prop] = '0';
      }
    }
    return body;
  }
}
