import { Component, OnInit } from '@angular/core';
import {ImageServiceTokens} from '../../shared/service-token.enum';

@Component({
  selector: 'app-recommended-gallery',
  templateUrl: './recommended-gallery.component.html',
  styleUrls: ['./recommended-gallery.component.css']
})
export class RecommendedGalleryComponent implements OnInit {
  public imageServiceTokens = ImageServiceTokens;

  constructor() { }

  ngOnInit() {
  }
}
