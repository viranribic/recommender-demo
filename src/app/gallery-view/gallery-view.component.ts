import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {LoginErrorModalComponent} from '../modals/login-error-modal/login-error-modal.component';
import {ImageViewComponent} from './image-view/image-view.component';
import {ImageGalleryService} from '../shared/image-gallery.service';
import {ImageModel} from './image.model';
import {Observer} from 'rxjs/Observer';
import {Observable} from 'rxjs/Observable';
import {ImageServiceTokens} from '../shared/service-token.enum';

@Component({
  selector: 'app-gallery-view',
  templateUrl: './gallery-view.component.html',
  styleUrls: ['./gallery-view.component.css']
})
export class GalleryViewComponent implements OnInit {

  @Input() title: string;
  // paging
  hasPrevPage = false;
  hasNextPage = false;
  currentPage: number;

  // Image album
  @Input() dataToken: ImageServiceTokens;
  selectedIndex = 0;
  images: ImageModel[] = [];

  // Image view component
  private imageView: ImageViewComponent;
  @ViewChild('imageView') set content(imageView: ImageViewComponent) {
    this.imageView = imageView;
  }

  // Error handling
  @ViewChild('modal') modal: LoginErrorModalComponent;
  public errorMessage = 'There was an error loading images. Try reopening the gallery.';

  constructor(private imageService: ImageGalleryService) { }

  ngOnInit() {
    this.currentPage = 1;
    this.onRefreshGallery();
  }

  onSelectedImageChange(index: number) {
    if (this.images === undefined) {
      return;
    }
    index = index < 0 ? 0 : index;
    index = index > this.images.length - 1 ? this.images.length - 1 : index;

    this.selectedIndex = index;
  }

  onPreviousPage() {
    if (this.hasPrevPage) {
      this.currentPage -= 1;
      this.onRefreshGallery();
    }
  }

  onNextPage() {
    if (this.hasNextPage) {
      this.currentPage += 1;
      this.onRefreshGallery();
    }

  }

  onRefreshGallery() {
    this.imageService.getData(this.dataToken, this.currentPage).subscribe(
      (data) => {
        const nextPage = this.getQueryParamsPage(data['next']);
        const prevPage = this.getQueryParamsPage(data['previous']);

        this.hasNextPage = nextPage !== null;
        this.hasPrevPage = prevPage !== null;

        const images = [];

        if (data.results.length !== 0) {

          let index = 0;
          for (const image of data.results) {
            images.push(new ImageModel(
              image.id,
              image.path,
              image.label,
              image.liked,
              index));
            index += 1 ;
          }

          this.selectedIndex = 0;
          this.images = images; // This tiggers the ImageView update.
        } else {
          this.selectedIndex = 0;
          this.images = [];
          this.imageService.errorInfo().subscribe( ( errData: any) => {
            this.selectedIndex = 0;
            this.images = [ new ImageModel(-1, errData.path, -1, false, 0)];
          });
        }

      },
      (err) => {
        this.modal.show();
      }
    );
  }

  private getQueryParamsPage(str: string) {
    if (str === null) {
      return null;
    }
    if ( str.indexOf('?') !== -1) {
      const paramStr = str.split('?')[1];
      const pageNum = paramStr.split('&');
      return Number(pageNum[0].split('=')[1]);
    }
    return 1;
  }

}
