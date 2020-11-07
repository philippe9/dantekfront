
/**
 * @classdesc Helper to manipulate data before HTTP request.
 * @author Melo
 * @version 1.1.0 In this new version, the methods are static so you can use them directly from the class
 * @copyright Melo 2018
 * @name MethodUtils
 */


export class MethodUtils {
  constructor() {
  }
  /**
   * Convertir un objet en formdata
   * @param object l'objet a inserer dans le formdata
   * @returns Formdata
   */
  static toFormDatas(object: any): FormData {
    const formdata = new FormData();
    // console.log(object.etat);
    for (const prop in object) {
      if (!object.hasOwnProperty(prop)) { continue; }
      formdata.append(prop, object[prop]);

    }
    return formdata;
  }
  /**
   * Change object to string to be sent to HTTP request
   * @param object
   * @returns string
   */
  static toSpecialString(object: any): string {
    let stringToReturn = '';
    for (const prop in object) {
      // console.log(object[prop]);
      // skip loop if the property is from prototype
      if (!object.hasOwnProperty(prop)) { continue; }
      stringToReturn = '&' + prop + '=' + object[prop] + stringToReturn;
    }
    return stringToReturn;
  }

  /**
   * Validate a mail adresse
   * @param mail mail to be validated
   * @returns boolean
   */
  ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }

    return false;
  }


}
