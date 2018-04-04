import { Component, OnInit } from '@angular/core';
import {ImageGalleryService} from '../../shared/image-gallery.service';
import {ImageServiceTokens} from '../../shared/service-token.enum';

@Component({
  selector: 'app-random-gallery',
  templateUrl: './random-gallery.component.html',
  styleUrls: ['./random-gallery.component.css']
})
export class RandomGalleryComponent implements OnInit {
  public imageServiceTokens = ImageServiceTokens;

  constructor() { }

  ngOnInit() {
  }


}
