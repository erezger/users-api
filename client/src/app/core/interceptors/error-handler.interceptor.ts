/**
 * Interceptor
 * This is ErrorHandlerInterceptor that adds a default error handler to all requests.
 */

import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Router} from '@angular/router';

import {environment} from '@environment/environment';

/**
 * Creates a ErrorHandlerInterceptor.
 * @class ErrorHandlerInterceptor
 * @description
 *  This class is used to add error handler for all api requests
 */

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {
  constructor(
    private router: Router
  ) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(error => this.errorHandler(error)));
  }

  /**
   * Customize the default error handler here if needed
   * @param {response} HttpEvent
   * @returns Http Response Object
   */
  // Customize the default error handler here if needed
  private errorHandler(response: HttpEvent<any>): Observable<HttpEvent<any>> {

    // console.error(error);
    const httpErrorCode = response['status'];
    switch (httpErrorCode) {
      case 'UNAUTHORIZED':
        this.router.navigateByUrl('/users');
        break;
      case 'FORBIDDEN':
        this.router.navigateByUrl('/403');
        break;
      case 'NOT_FOUND':
        this.router.navigateByUrl('/404');
        break;
      default:
    }

    throw response;
  }

}

