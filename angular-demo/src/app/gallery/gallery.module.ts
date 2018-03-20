import {NgModule} from '@angular/core';
import {GalleryComponent} from './gallery.component';
import {NgxImageGalleryModule} from 'ngx-image-gallery';
import {FlexLayoutModule} from '@angular/flex-layout';
import {
  MatButtonModule, MatCardModule, MatGridListModule, MatIconModule, MatInputModule, MatToolbar,
  MatToolbarModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import { RecommendedGalleryComponent } from './recommended-gallery/recommended-gallery.component';
import { LikedGalleryComponent } from './liked-gallery/liked-gallery.component';
import {ImageGalleryService} from './image-gallery.service';

const modules = [
  CommonModule,
  NgxImageGalleryModule,
  FlexLayoutModule,
  MatIconModule,
  MatToolbarModule,
  MatCardModule,
  MatButtonModule,
  MatInputModule,
  MatGridListModule,
  FormsModule
];

@NgModule({
  declarations: [
    GalleryComponent,
    LikedGalleryComponent,
    RecommendedGalleryComponent
  ],
  imports: modules ,
  exports: modules ,
  providers: [ImageGalleryService]
})
export class GalleryModule {}
