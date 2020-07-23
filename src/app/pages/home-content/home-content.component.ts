import { Component, OnInit, HostBinding } from '@angular/core';
import { pageTransition } from '@ui';

@Component({
  selector: 'app-home-content',
  animations: [pageTransition],
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.scss']
})
export class HomeContentComponent implements OnInit {
  @HostBinding('@pageTransition') pageTransition = '';
  constructor() { }

  ngOnInit() {
  }

}
