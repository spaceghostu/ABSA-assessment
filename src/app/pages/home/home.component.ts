import { Component, OnInit, HostBinding } from '@angular/core';
import { pageTransition } from '@ui';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  animations: [pageTransition],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @HostBinding('@pageTransition') pageTransition = '';

  href: string;

  constructor(private router: Router) {
    this.href = this.router.url;
  }

  ngOnInit() {
  }

}
