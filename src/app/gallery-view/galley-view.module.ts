import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {
  MatButtonModule, MatCardModule, MatGridListModule, MatIconModule, MatInputModule, MatToolbar,
  MatToolbarModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {ModalModule} from '../modals/modal.module';
import {GalleryViewComponent} from './gallery-view.component';
import {ImageViewComponent} from './image-view/image-view.component';
import {ImageGalleryService} from '../shared/image-gallery.service';
import {MaterialModule} from '../material.module';


@NgModule({
  declarations: [
    GalleryViewComponent,
    ImageViewComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ModalModule
  ],
  exports: [
    GalleryViewComponent,
    ImageViewComponent
  ],
  providers: [ImageGalleryService]
})
export class GalleryViewModule {}
