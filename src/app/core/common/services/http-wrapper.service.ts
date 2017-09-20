import { Injectable } from '@angular/core';
import {
  Http,
  Headers,
  RequestOptions,
  Response,
  URLSearchParams
} from '@angular/http';

import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';

import { AppConfig } from './app-config.service';
import { Logger } from './logger.service';
import { LocalStorageService } from './local-storage.service';
import { CaseFormat } from '../helper/case-format';

@Injectable()
export class HttpWrapperService {

  constructor(
    private http: Http,
    private appConfig: AppConfig,
    private logger: Logger,
    private localStorageService: LocalStorageService) { }

  /**
   * API use for user
   */

  get(url: string, paramObj?: Object): Observable<any> {
    const options: RequestOptions = this.getOption(paramObj);
    return this.http.get(`${this.appConfig.API.ROOT_URL}${url}`, options)
      .do((Data) => {
        console.log(Data);
      })
      .map(this.extractData.bind(this))
      .catch(this.handleError.bind(this));
  }

  post(url: string, body: Object, paramObj?: Object): Observable<any> {
    const options: RequestOptions = this.getOption(paramObj);
    return this.http.post(`${this.appConfig.API.ROOT_URL}${url}`, body, options)
      .map(this.extractData.bind(this))
      .catch(this.handleError.bind(this));
  }

  // Use Update multiple field
  putch(url: string, body: Object, paramObj?: Object): Observable<any> {
    const options: RequestOptions = this.getOption(paramObj);
    return this.http.put(`${this.appConfig.API.ROOT_URL}${url}`, body, options)
      .map(this.extractData.bind(this))
      .catch(this.handleError.bind(this));
  }

  // Use to update one field
  patch(url: string, body: Object, paramObj?: Object): Observable<any> {
    const options: RequestOptions = this.getOption(paramObj);
    return this.http.patch(`${this.appConfig.API.ROOT_URL}${url}`, body, options)
      .map(this.extractData.bind(this))
      .catch(this.handleError.bind(this));
  }

  delete(url: string, paramObj?: Object): Observable<any> {
    const options: RequestOptions = this.getOption(paramObj);
    return this.http.delete(`${this.appConfig.API.ROOT_URL}${url}`, options)
      .map(this.extractData.bind(this))
      .catch(this.handleError.bind(this));
  }

  /**
   * Get RequestOptions by param object, server use camel case
   */
  getOption(obj: Object): RequestOptions {
    const params: URLSearchParams = this.convertObjToParams(CaseFormat.convertKeysToCamelCase(obj));
    const headers: Headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    headers.append('Access-Control-Allow-Origin', '*');
    const options: RequestOptions = new RequestOptions({
      headers: headers,
      search: params
    });
    return options;
  }

  /**
   * Convert object to URLSearchParams
   */
  convertObjToParams(obj: Object): URLSearchParams {
    if (obj) {
      let params: URLSearchParams = new URLSearchParams();
      if (obj) {
        _.forOwn(obj, (value: any, key: string) => {
          if (value) {
            params.set(key, value);
          }
        });
      }
      return params;
    }
    return null;
  }

  /**
   * Resolve when http success
   */
  private extractData(res: Response): any {
    this.logger.info('Data reponse from the server: ', CaseFormat.convertKeysToCamelCase(res.json()));
    return CaseFormat.convertKeysToCamelCase(res.json());
  }

  /**
   * Resolve when http fail
   */
  private handleError(err: Response) {
    return Observable.throw(CaseFormat.convertKeysToCamelCase(err.json()));
  }
}
