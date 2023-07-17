import { animate, style, transition, trigger } from '@angular/animations';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-time',
  templateUrl: './one-time.component.html',
  styleUrls: ['./one-time.component.sass'],
  animations: [
    trigger('flyInTop', [
      transition('void => *', [
        style({ transform: 'translateY(-20px)', opacity: 0}),
        animate('1s ease-out'),
        style({ transform: 'translateX(0px)', opacity: 1})
      ])
    ]),
    trigger('flyInBottom', [
      transition('void => *', [
        style({ transform: 'translateY(20px)', opacity: 0}),
        animate('1s ease-out'),
        style({ transform: 'translateX(0px)', opacity: 1})
      ])
    ]),
    trigger('buttonAppear', [
      transition('void => *', [
        style({ transform: 'translate(-50%, 25px)', opacity: 0}),
        animate('1s ease-out'),
        style({ transform: 'translate(-50%, 0px)', opacity: 1})
      ]),
      transition('* => void', [
        style({ transform: 'translate(-50%, 0px)', opacity: 1}),
        animate('1s ease-out'),
        style({ transform: 'translate(-50%, 25px)', opacity: 0})
      ])
    ]),
  ]
})
export class OneTimeComponent implements OnInit {
  screenWidth = 0;
  scroll = 0;
  timelineScrollContainer: HTMLElement | null = null;
  cloudsScrollContainer: HTMLElement | null = null;
  cloudsScrollContainer2: HTMLElement | null = null;
  showSecond = false;
  showMinute = false;
  showHour = false;
  showDay = false;
  showWeek = false;
  showMonth = false;
  showYear = false;
  showDecade = false;
  showLifetime = false;

  constructor() {
    // Necessary variable to access screen width in the html svg element
    this.screenWidth = window.innerWidth;
  }

  ngOnInit(): void {
    this.timelineScrollContainer = document.getElementById('timeline-scroll-container');
    this.cloudsScrollContainer = document.getElementById('clouds-scroll-container');
    this.cloudsScrollContainer2 = document.getElementById('clouds-scroll-container-2');
  }

  // Recalc screenWidth if the screen size changes
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
  }

  onWindowScroll(e: Event) {
    this.scroll = ((e.target as Element).scrollTop / window.innerHeight) * this.screenWidth;
    if (this.timelineScrollContainer !== null) {
      this.timelineScrollContainer.setAttribute('style', 'left: ' + -(this.scroll) + "px");
    }
    if (this.cloudsScrollContainer !== null) {
      this.cloudsScrollContainer.setAttribute('style', 'left: ' + -(this.scroll / 9) + "px");
    }
    if (this.cloudsScrollContainer2 !== null) {
      this.cloudsScrollContainer2.setAttribute('style', 'left: ' + -(this.scroll / 16) + "px");
    }

    if (!this.showSecond && this.scroll > (this.screenWidth * 0.75)) {
      this.showSecond = true;
    }
    if (!this.showMinute && this.scroll > (this.screenWidth * 1.75)) {
      this.showMinute = true;
    }
    if (!this.showHour && this.scroll > (this.screenWidth * 2.75)) {
      this.showHour = true;
    }
    if (!this.showDay && this.scroll > (this.screenWidth * 3.75)) {
      this.showDay = true;
    }
    if (!this.showWeek && this.scroll > (this.screenWidth * 4.75)) {
      this.showWeek = true;
    }
    if (!this.showMonth && this.scroll > (this.screenWidth * 5.75)) {
      this.showMonth = true;
    }
    if (!this.showYear && this.scroll > (this.screenWidth * 6.75)) {
      this.showYear = true;
    }
    if (!this.showDecade && this.scroll > (this.screenWidth * 7.75)) {
      this.showDecade = true;
    }
    if (!this.showLifetime && this.scroll > (this.screenWidth * 8.75)) {
      this.showLifetime = true;
    }
  }

}
