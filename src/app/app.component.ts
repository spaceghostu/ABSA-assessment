import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  images = new Array();

  ngOnInit() {
    this.pload(
      'https://calvin-absa.web.app/Eiffel-tower-paris.jpeg',
      'https://calvin-absa.web.app/blog.jpeg',
      'https://calvin-absa.web.app/flights.jpeg',
      'https://calvin-absa.web.app/holidays.webp',
      'https://calvin-absa.web.app/hotels.webp',
      'https://calvin-absa.web.app/pyramids.webp',
      'https://calvin-absa.web.app/taj.jpeg',
    );
  }

  pload(...args: any[]): void {
    for (let i = 0; i < args.length; i++) {
      this.images[i] = new Image();
      this.images[i].src = args[i];
      console.log('loaded: ' + args[i]);
    }
  }
}
