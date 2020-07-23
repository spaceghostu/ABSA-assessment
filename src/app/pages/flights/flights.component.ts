import { Component, OnInit, HostBinding } from '@angular/core';
import { pageTransition } from '@ui';

@Component({
  selector: 'app-flights',
  animations: [pageTransition],
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponent implements OnInit {
  @HostBinding('@pageTransition') pageTransition = '';

  constructor() { }

  ngOnInit() {
  }

}
