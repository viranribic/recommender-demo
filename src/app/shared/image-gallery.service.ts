import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';

import {AppSettings} from '../appSettings';
import {Observable} from 'rxjs/Observable';
import {ImageServiceTokens} from './service-token.enum';


@Injectable()
export class ImageGalleryService {
  constructor(private http: HttpClient) {
  }

  private apiUrl = AppSettings.API_URL;

  getData(token: ImageServiceTokens, page: number): Observable<any> {
    switch (token){
      case ImageServiceTokens.RECOMMENDED: return this.getRecommendedImages(page);
      case ImageServiceTokens.LIKED: return this.getLikedImages(page);
      default : return this.getImages(page);

    }
  }

  getImages(page: number): Observable<any> {
    const params = new HttpParams().append('page', String(page));
    return this.http
      .get<any>(
        this.apiUrl + 'api/image/random/',
        {
          params: params
        });
  }

  getRecommendedImages(page: number): Observable<any> {
    const params = new HttpParams().append('page', String(page));
    return this.http
      .get<any>(
        this.apiUrl + 'api/image/recommended/',
        {
          params: params
        });

  }

  getLikedImages( page: number): Observable<any> {
    const params = new HttpParams().append('page', String(page));
    return this.http
      .get<any>(
        this.apiUrl + 'api/image/liked/',
        {
          params: params
        });

  }

  likeAction(id: number, liked: boolean): Observable<any> {
    return this.http.post(this.apiUrl + 'api/image/action/like/', {id: id , like: liked});
  }

}
