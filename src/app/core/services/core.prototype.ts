/**
 * @classdesc Global request middleware
 * @author Melo
 * @version 1.1.0
 * @copyright Melo 2020
 * @name RequestService
 */


import { Injectable } from '@angular/core';
import { RequestService } from '../../shared/services/request.service';

import { MethodUtils } from 'src/app/shared/helpers/methodUtils';
declare var jQuery: any;
@Injectable()
export class CorePrototype {
  /**
   * @var Object this variable contains all the url of the module
   */
  public urls = {};
  public codes = {};

  constructor(private request: RequestService) {
  }

  /**
   * @param url The current get url
   * @param params the get parameters for the request
   * @return Promise The current request promise
   */
  get(url, params = null): Promise<any> {
    let parameters = '';
    const that = this;
    // tslint:disable-next-line: forin
    for (const prop in params) {
      parameters += '/' + params[prop];
    }
    const link = url + parameters;
    // console.log(link);
    return new Promise((resolve, reject) => {
      that.request.get(link).subscribe({
        next(result) {
          resolve(result);
        },
        error(error) {
          reject(error);
        },
      });
    }).catch((error) => {
      console.log(error);
      alert('Un soucis au niveau du serveur');

    });
  }

  /**
   * @param url The current get url
   * @param params the get parameters for the request
   * @return Promise The current request promise
   */
  post(url, params = null, parameters = null): Promise<any> {
    const that = this;

    const data = MethodUtils.toFormDatas(params);
    console.log(data);
    return new Promise((resolve, reject) => {
      that.request.post(url, data).subscribe({
        next(result) {
          resolve(result);
        },
        error(error) {
          reject(error);
        },
      });
    }).catch((error) => {
      console.log(error);
      alert('Un soucis au niveau du serveur');

    });
  }

}
