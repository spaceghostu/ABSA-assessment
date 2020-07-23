import { Component, OnInit, HostBinding } from '@angular/core';
import { pageTransition } from '@ui';

@Component({
  selector: 'app-hotels',
  animations: [pageTransition],
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss']
})
export class HotelsComponent implements OnInit {
  @HostBinding('@pageTransition') pageTransition = '';

  constructor() { }

  ngOnInit() {
  }

}
