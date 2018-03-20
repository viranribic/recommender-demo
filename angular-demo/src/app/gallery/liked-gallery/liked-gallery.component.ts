import { Component, OnInit, Input, ViewChild } from '@angular/core';
import {DEMO_GALLERY_CONF} from '../config';
import {GALLERY_CONF, NgxImageGalleryComponent} from 'ngx-image-gallery';
import {ImageGalleryService} from '../image-gallery.service';
import {ImageModel} from '../image.model';

@Component({
  selector: 'app-liked-gallery',
  templateUrl: './liked-gallery.component.html',
  styleUrls: ['./liked-gallery.component.css']
})
export class LikedGalleryComponent implements OnInit {

  @Input() title = 'Liked gallery';
  @Input() conf: GALLERY_CONF = DEMO_GALLERY_CONF;
  @Input() images: ImageModel[] = [];
  @ViewChild('ngxImageGallery') ngxImageGallery: NgxImageGalleryComponent;

  selectedImage: ImageModel = null;
  requestPage = 1;
  nextPage = 2;
  prevPage: number =  null;


  constructor(private imageService: ImageGalleryService) { }

  ngOnInit() {
    this.onRefreshGallery();
  }

  albumImageClicked(image) {
    this.selectedImage = image;
    this.ngxImageGallery.setActiveImage(this.images.indexOf(image)); // set the image in the viewer
  }

  selectedImageLiked() {
    if (this.selectedImage !== null) {
      return this.selectedImage.liked;
    }
    return false;
  }


  toggleLike() {
    this.selectedImage.liked = !this.selectedImage.liked;
    this.imageService.likeAction(this.selectedImage.id, this.selectedImage.liked ).subscribe(
      (data) => {
        console.log(data['message']);
      }
    );

  }


  onPreviousPage() {
    if ( this.prevPage !== null) {
      this.requestPage = this.prevPage;
      this.onRefreshGallery();
    }
  }

  onNextPage() {
    if ( this.nextPage !== null) {
      this.requestPage = this.nextPage;
      this.onRefreshGallery();
    }
  }

  onRefreshGallery() {
    this.imageService.getLikedImages(this.requestPage).subscribe(
      (data) => {
        this.nextPage = (data['next'] === null) ? null : this._getQueryParamsPage(data['next']);
        this.prevPage = (data['previous'] === null) ? null : this._getQueryParamsPage(data['previous']);


        const images = [];
        if (data.results.length !== 0) {
          for (const image of data.results) {
            images.push( new ImageModel(image.id, image.path, image.label, image.liked));
          }
          this.images        = images;
          this.selectedImage = this.images[0];
        } else {
          images.push(new ImageModel( -1, 'media/no_images.jpg', -1, false));
          this.images        = images;
          this.selectedImage = null;

        }


      });
  }

  private _getQueryParamsPage(str: string) {
    if ( str.indexOf('?') !== -1) {
      const paramStr = str.split('?')[1];
      const pageNum = paramStr.split('&');
      return Number(pageNum[0].split('=')[1]);

    }
    return 1;
  }



}
