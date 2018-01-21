import { Component, OnInit, Input } from '@angular/core';
import { ImageService } from '../services/image.service';
import { Image } from '../model/image';

/**
 * This is the card for images.
 */
@Component({
  selector: 'app-my-image',
  templateUrl: './my-image.component.html',
  styleUrls: ['./my-image.component.scss']
})
export class MyImageComponent implements OnInit {
  image: Image;
  constructor(private imageService: ImageService) {
    
   }

  ngOnInit() {
    this.image = this.imageService.getUploadedImage();
  }

}
