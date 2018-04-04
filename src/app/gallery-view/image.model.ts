import {AppSettings} from '../appSettings';

export class ImageModel {
  url: string;
  altText: string;

  constructor(
    public id: number,
    public path: string ,
    public label: number,
    public liked: boolean,
    public index: number
  ) {
    this.url = AppSettings.STORAGE_URL + path;
    this.altText = 'Loaded image.';

  }
}


