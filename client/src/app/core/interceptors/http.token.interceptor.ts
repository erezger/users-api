/**
 * Interceptor
 * This is HttpTokenInterceptor that adds a token to each api request.
 */

import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest,} from '@angular/common/http';
import {Observable} from 'rxjs';

/**
 * Creates a HttpTokenInterceptor.
 * @class HttpTokenInterceptor
 * @classdesc This class is used to add user token/auth entity to the headers.
 * You can define the custom header here.
 */

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {
  constructor() {
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const headersConfig: HttpHeaders = new HttpHeaders();
    headersConfig['Cache-Control'] = 'no-cache'; // Disable IE cache
    
    const request = req.clone({setHeaders: {
      'Cache-Control': 'no-cache', // Disable IE cache
      'Content-Type': 'application/json',
      Accept: '*',
    }});
    return next.handle(request);
  }
}
