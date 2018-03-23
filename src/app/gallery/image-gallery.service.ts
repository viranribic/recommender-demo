import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';

import { AuthService } from '../auth/auth.service';
import {ImageModel} from './image.model';
import {AppSettings} from '../appSettings';

@Injectable()
export class ImageGalleryService {
  constructor(private http: HttpClient,
              private authService: AuthService) {
  }

  private apiUrl = AppSettings.API_URL;

  getImages(page: number) {
    const params = new HttpParams().append('page', String(page));
    return this.http
      .get<any>(
        this.apiUrl + 'api/image',
        {
          params: params
        });
  }

  getRecommendedImages(page: number) {
    const params = new HttpParams().append('page', String(page));
    return this.http
      .get<any>(
        this.apiUrl + 'api/image/recommended',
        {
          params: params
        });

  }

  getLikedImages( page: number) {
    const params = new HttpParams().append('page', String(page));
    return this.http
      .get<any>(
        this.apiUrl + 'api/image/liked',
        {
          params: params
        });

  }

  likeAction(id: number, liked: boolean) {
    return this.http.post(this.apiUrl + 'api/image/like/', {id: id , like: liked});
  }
}
