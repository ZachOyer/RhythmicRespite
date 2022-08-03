import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StyleService {
  isMobile = false;

  constructor() { }

  getIsMobile() {
    return this.isMobile;
  }

  checkForMobileDevice() {
    if (/Mobi|Android/i.test(navigator.userAgent)){
      this.isMobile = true;
    }
  }
}
