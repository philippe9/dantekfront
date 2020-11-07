/**
 * @classdesc Global request factory
 * @author Melo
 * @version 1.0.0
 * @copyright Melo 2019
 * @name RequestService
 */

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpEvent } from '@angular/common/http';

import { catchError, retry, last } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { timeout } from 'rxjs/operators/timeout';


@Injectable()
export class RequestService {

  /**
   *
   * @param {HttpClient} http - Module to handle HTTP Requests
   */
  constructor(private http: HttpClient) {
  }

  /**
   * Post request
   * @param {any} link - The address to which the request is done
   * @param {any} data - the data to be sent
   */
  post(link: any, data: any): any {

    console.log(link);
    return this.http.post<any>(link, data).pipe(
      last(), // return last (completed) message to caller
      catchError(this.handleError)
    );
  }
  /**
   * Post request
   * @param {any} link - The address to which the request is done
   * @param {any} data - the data to be sent
   */
  put(link: any, data: any): any {
    return this.http.put<any>(link, data).pipe(
      last(), // return last (completed) message to caller
      catchError(this.handleError)
    );
  }

  /**
   * Get Request
   * @param {any} link - The address to which the request is done
   * @param {any} data - the data to be sent
   */
  get(link: any): any {
    return this.http.get<any>(link).pipe(
      timeout(10000),
      retry(2),
      catchError(this.handleError)
    );
  }

  /**
   * Get Request
   * @param {any} link - The address to which the request is done
   * @param {any} data - the data to be sent
   */
  delete(link: any): any {
    return this.http.delete<any>(link).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error instanceof HttpErrorResponse) {
      if (!navigator.onLine) {
        // Handle offline error
        console.log('offline bro');
        alert('Vous etes hors connexion');
      } else {
        // TODO: Handle Http Error (error.status === 403, 404...)
        console.log('Handle Http Error (error.status === 403, 404...)');
      }
    } else {
      // Handle Client Error (Angular Error, ReferenceError...)
      console.log('angular error');
      console.log(error);
    }
    return throwError(error);
  }

}
