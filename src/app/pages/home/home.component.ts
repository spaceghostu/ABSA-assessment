import { Component, OnInit, HostBinding } from '@angular/core';
import { pageTransition } from '@ui';

@Component({
  selector: 'app-home',
  animations: [pageTransition],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @HostBinding('@pageTransition') pageTransition = '';
  constructor() { }

  ngOnInit() {
  }

}
