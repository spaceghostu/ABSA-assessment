import { Component, OnInit, HostBinding } from '@angular/core';
import { pageTransition } from '@ui';

@Component({
  selector: 'app-faqs',
  animations: [pageTransition],
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})
export class FaqsComponent implements OnInit {
  @HostBinding('@pageTransition') pageTransition = '';
  constructor() { }

  ngOnInit() {
  }

}
