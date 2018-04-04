///<reference path="liked-gallery/liked-gallery.component.ts"/>
import {NgModule} from '@angular/core';
import {LikedGalleryComponent} from './liked-gallery/liked-gallery.component';
import {RandomGalleryComponent} from './random-gallery/random-gallery.component';
import {RecommendedGalleryComponent} from './recommended-gallery/recommended-gallery.component';
import {ImageGalleryService} from '../shared/image-gallery.service';
import {GalleryViewModule} from '../gallery-view/galley-view.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material';
import {ImageServiceTokens} from '../shared/service-token.enum';
import {MaterialModule} from '../material.module';




@NgModule({
  declarations: [
    LikedGalleryComponent,
    RandomGalleryComponent,
    RecommendedGalleryComponent
  ],
  imports: [
    GalleryViewModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  exports: [
    LikedGalleryComponent,
    RandomGalleryComponent,
    RecommendedGalleryComponent,
  ],
  providers: [ImageGalleryService]
})
export class GalleryModule {}
