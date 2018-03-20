import {GALLERY_IMAGE} from 'ngx-image-gallery';
import {AppSettings} from '../appSettings';

export class ImageModel implements GALLERY_IMAGE {
  url: string;

  constructor(
    public id: number,
    public path: string ,
    public label: number,
    public liked: boolean,
    _cached?: boolean,
    thumbnailUrl?: string,
    altText?: string,
    title?: string,
    extUrl?: string,
    extUrlTarget?: string) {

    this.url = AppSettings.BACKEND_URL + path;
  }
}


