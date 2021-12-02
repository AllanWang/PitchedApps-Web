import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-content-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  route: string;

  constructor(private router: Router) {
    this.route = router.url;
    // Todo optimize?
    // Do not reuse route for this component
    // routeReuseStrategy
    // https://stackoverflow.com/questions/49155895/how-to-activate-routereusestrategy-only-for-specific-routes
    router.events
      .pipe(filter((event): event is NavigationStart => event instanceof NavigationStart))
      .subscribe(event => {
        this.showForRoute(event.url)
      });
  }

  ngOnInit(): void {
    this.showForRoute(this.router.url);
  }

  private showForRoute(url: string) {
    this.route = url;
    console.log(`not found: ${this.route}`)
  }

}
