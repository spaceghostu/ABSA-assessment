import { Component, OnInit, HostBinding } from '@angular/core';
import { pageTransition } from '@ui';

@Component({
  selector: 'app-contact',
  animations: [pageTransition],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @HostBinding('@pageTransition') pageTransition = '';
  constructor() { }

  ngOnInit() {
  }

}
