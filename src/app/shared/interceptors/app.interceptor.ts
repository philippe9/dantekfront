/**
 * @classdesc The global request handeler which can add headers,modify URLs before request and get some result errors
 * @author Melo
 * @version 1.0.0
 * @copyright Melo 2019
 * @name AppInterceptor
 */

import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpEventType, HttpResponse
} from '@angular/common/http';

import { Observable } from 'rxjs';
// import { do } from 'rxjs/operators';
import { finalize, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment.prod';
import { PRODUCTION_API, DEVELOPMENT_API } from '../global/codes';



/** Pass untouched request through to the next request handler. */
@Injectable()
export class AppInterceptor implements HttpInterceptor {
  token: any;
  constructor() {
  }
  /**
   * This method can play the role of a constructor in an interceptor
   * @param {HttpRequest<any>} req - The actual URL to be executed
   * @param {HttpHandeler} next - Param to handle a request after execution
   * @returns {Observable<HttpEvent<any>>} - The result of the request in an observable
   */
  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    let newReq;
    if (environment.production) {
      newReq = req.clone({
        url: PRODUCTION_API + req.url
      });
    } else {
      newReq = req.clone({
        url: DEVELOPMENT_API + req.url
      });
    }

    if ((req.url.match(/assets/g) || []).length === 1) {
      newReq = req.clone({
        url: req.url,
      });
    }

    return next.handle(newReq).pipe(
      tap(
        succ => { succ; },
        err => {
          return err;
        })

    )
  }
}
