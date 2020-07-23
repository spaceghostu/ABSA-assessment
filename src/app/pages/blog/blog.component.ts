import { Component, OnInit, HostBinding } from '@angular/core';
import { pageTransition } from '@ui';

@Component({
  selector: 'app-blog',
  animations: [pageTransition],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  @HostBinding('@pageTransition') pageTransition = '';

  constructor() { }

  ngOnInit() {
  }

}
