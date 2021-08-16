/**
 * Create a new instance of CommonHttpService
 * @class CommonHttpService
 * @description
 * This service define a wrapper over http requests GET,POST,PUT,PATCH,DELETE
 */

import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams,} from '@angular/common/http';

import {map} from 'rxjs/internal/operators/map';
import {CommonBase} from '@core/interfaces/common-base';
import {APIResponeModel} from '../models/api-response.model';
import {catchError} from 'rxjs/operators';
import {Observable} from 'rxjs/internal/Observable';
import {throwError} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonHttpService {
  constructor(private http: HttpClient) {
  }

  private formatAndPrintErrors(error: HttpErrorResponse) {
    return throwError(error.error);
  }

  /**
   * @function get
   * @description
   * Constructs a GET request that interprets the body as a JSON object and returns the response body in a given type.
   * It will parse the the response and map it with {ApiResponseModel} to set common response format
   * @param  {string} url
   * @param args
   * @return {ApiResponseModel} Promise of type ApiResponseModel
   */
  get<ResModel extends Record<string, any>>(
    url: string,
    args: CommonBase = {}
  ): Observable<ResModel> {
    const params = new HttpParams(args);
    return this.http.get(url, { params }).pipe(
      catchError(this.formatAndPrintErrors),
      map((res: ResModel) => res)
    );
  }

  getById<ResModel extends any>(
    url: string,
    // args: CommonBase = {}
    args
  ): Observable<ResModel> {
    const params = new HttpParams(args);
    return this.http.get(url, { params }).pipe(
      catchError(this.formatAndPrintErrors),
      map((res: ResModel) => res)
    );
  }

  /**
   * @function post
   * @description
   * Constructs a wrapper over POST request that interprets the body as a JSON object and returns an observable of the response.
   * It will parse the the response and map it with {ApiResponseModel} to set common response format
   * @param path
   * @param body
   * @return {ApiResponseModel} Promise of type ApiResponseModel
   */
  public post<ReqModel extends Record<string, any>,
    ResModel extends Record<string, any>>(path: string, body: ReqModel): Observable<ResModel> {
    return this.http.post(`${path}`, body).pipe(
      catchError(this.formatAndPrintErrors),
      map((res: ResModel) => res)
    );
  }

  /**
   * @function put
   * @description
   * Constructs a wrapper over PUT request that interprets the body as a JSON object and returns an observable of the response.
   * It will parse the the response and map it with {ApiResponseModel} to set common response format
   * @param  {string} url
   * @param body
   * @return {ApiResponseModel} Promise of type ApiResponseModel
   */
  public put<ReqModel extends Record<string, any>,
    ResModel extends Record<string, any>>(url: string, body: ReqModel): Observable<ResModel> {
    return this.http.put(url, body).pipe(
      catchError(this.formatAndPrintErrors),
      map((res: ResModel) => res)
    );
  }

  public patch<ReqModel extends Record<string, any>,
    ResModel extends Record<string, any>>(url: string, body: ReqModel): Observable<ResModel> {
    return this.http.patch(url, body).pipe(
      catchError(this.formatAndPrintErrors),
      map((res: ResModel) => res)
    );
  }

  /**
   * @function delete
   * @description
   * Constructs a wrapper over DELETE request and returns the response in a given type.
   * It will parse the the response and map it with {ApiResponseModel} to set common response format
   * @param  {string} url
   * @return {ApiResponseModel} Promise of type ApiResponseModel
   */
  delete<ResModel extends Record<string, any>>(
    url: string
  ): Observable<ResModel> {
    return this.http.delete(url).pipe(
      catchError(this.formatAndPrintErrors),
      map((res: ResModel) => res)
    );
  }
}
