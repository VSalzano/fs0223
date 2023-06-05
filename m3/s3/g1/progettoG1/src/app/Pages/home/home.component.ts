import { Component, OnInit } from '@angular/core';
import { PhotosService } from 'src/app/Services/photos.service';
import { Photo } from 'src/app/Models/photo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private photosSvc: PhotosService) {}
  photosArr: Photo[] = [];

  ngOnInit(): void {
    this.photosSvc.get().subscribe((res) => {
      this.photosArr = res.filter((photo) => photo.albumId == 1);
      console.log(this.photosArr);
    });
  }
}
