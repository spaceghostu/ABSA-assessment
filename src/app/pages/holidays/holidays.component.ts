import { Component, OnInit, HostBinding } from '@angular/core';
import { pageTransition } from '@ui';

@Component({
  selector: 'app-holidays',
  animations: [pageTransition],
  templateUrl: './holidays.component.html',
  styleUrls: ['./holidays.component.scss']
})
export class HolidaysComponent implements OnInit {
  @HostBinding('@pageTransition') pageTransition = '';

  constructor() { }

  ngOnInit() {
  }

}
