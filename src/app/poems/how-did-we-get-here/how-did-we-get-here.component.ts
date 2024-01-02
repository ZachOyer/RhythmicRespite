import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-how-did-we-get-here',
  templateUrl: './how-did-we-get-here.component.html',
  styleUrls: ['./how-did-we-get-here.component.sass']
})
export class HowDidWeGetHereComponent implements OnInit {

  backgroundElement: Element | null = null;
  scrollPercent: number = 0;

  showBad1 = false;
  showGood2 = false;
  showBad2 = false;
  showGood3 = false;
  showBad3 = false;
  showGood4 = false;
  showBad4 = false;

  @HostListener('window:scroll', ['$event.target'])
  onScroll (event: any) {
    this.updateScrollPercent();
  }

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.backgroundElement = document.getElementById('background');
    this.updateScrollPercent();
  }

  updateScrollPercent() {
    this.scrollPercent = (window.scrollY + window.innerHeight) / (this.backgroundElement?.getBoundingClientRect().height || 1);
    console.log(this.scrollPercent);
    if (this.scrollPercent > .25) {
      this.showBad1 = true;
    }
    if (this.scrollPercent > .36) {
      this.showGood2 = true;
    }
    if (this.scrollPercent > .48) {
      this.showBad2 = true;
    }
    if (this.scrollPercent > .59) {
      this.showGood3 = true;
    }
    if (this.scrollPercent > .71) {
      this.showBad3 = true;
    }
    if (this.scrollPercent > .83) {
      this.showGood4 = true;
    }
    if (this.scrollPercent > .94) {
      this.showBad4 = true;
    }
  }

}
