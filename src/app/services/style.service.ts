import { Injectable } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StyleService {
  private isMobile = false;
  // Flag to know if the user is coming from another component or reloading
  // Initalized as false, changed to true once navigation occurs
  private navToComponents = false;

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationStart),
      take(2)
    ).subscribe((event) => {
      event = event as NavigationStart
      if (event.id >= 2) {
        this.navToComponents = true;
      }
    });
  }

  getIsMobile() {
    return this.isMobile;
  }

  checkForMobileDevice() {
    if (/Mobi|Android/i.test(navigator.userAgent)){
      this.isMobile = true;
    }
  }

  getNavToComponents() {
    return this.navToComponents;
  }
}
