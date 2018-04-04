import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ImageGalleryService} from '../../shared/image-gallery.service';
import {ImageModel} from '../image.model';

@Component({
  selector: 'app-image-view',
  templateUrl: './image-view.component.html',
  styleUrls: ['./image-view.component.css']
})
export class ImageViewComponent implements OnInit {

  @Input() selectedImage: ImageModel = null;
  @Output() shiftImageEvent: EventEmitter<number> = new EventEmitter<number>();

  constructor(private imageService: ImageGalleryService) { }

  ngOnInit() {
  }

  onNavigateLeft() {
    this.shiftImageEvent.emit( this.selectedImage.index - 1);
  }

  onNavigateRight() {
    this.shiftImageEvent.emit( this.selectedImage.index + 1);
  }

  onToggleLike() {

    this.imageService.likeAction(this.selectedImage.id, !this.selectedImage.liked ).subscribe(
      (data) => {
        this.selectedImage.liked = !this.selectedImage.liked;
        console.log('Like action executed.');
      }
    );

  }

}
