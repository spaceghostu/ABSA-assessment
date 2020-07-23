import { Component, OnInit, HostBinding, OnChanges } from '@angular/core';
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
  }

  ngOnInit() {
    this.href = location.href.replace(location.origin, '');
    this.router.events.subscribe((val) => {
      this.href = location.href.replace(location.origin, '');
    });
  }

}
