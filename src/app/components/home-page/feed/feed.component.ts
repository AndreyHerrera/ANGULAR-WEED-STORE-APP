import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { enviroment } from 'src/environments/environment';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit, OnDestroy {
  images: string[] = [
    'assets/info/image.png',
    'assets/info/image1.png',
    'assets/info/image2.png',
    'assets/info/image3.png',
    'assets/info/image4.png',
    'assets/info/image5.png',
    'assets/info/image6.png',
    'assets/info/image7.png',
  ];

  imagess: string[] = ['assets/info/image.png'];
  currentImageIndex = 0;
  imageNow: string | any;
  private intervalSubscription!: Subscription;

  public enviromentLogin: string;
  public enviromentRegister: string;
  acceptButton: {} = {};

  constructor() {
    localStorage.setItem('AuthToken', 'false');
    this.enviromentLogin = '/' + enviroment.pathLogin;
    this.enviromentRegister = '/' + enviroment.pathRegister;
  }
  ngOnInit(): void {
    this.imageNow = this.images[0];
    this.intervalSubscription = interval(3000).subscribe(() => {
      this.changeImage();
    });
  }

  ngOnDestroy(): void {
    this.intervalSubscription.unsubscribe();
  }

  changeImage() {
    const indexNow = this.images.indexOf(this.imageNow);
    const indexNext = (indexNow + 1) % this.images.length;
    this.imageNow = this.images[indexNext];
  }
}
