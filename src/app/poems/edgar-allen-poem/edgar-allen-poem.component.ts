import { Component, OnInit } from '@angular/core';
import { faDownLong } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-edgar-allen-poem',
  templateUrl: './edgar-allen-poem.component.html',
  styleUrls: ['./edgar-allen-poem.component.sass']
})
export class EdgarAllenPoemComponent implements OnInit {
  faDown = faDownLong;
  horizontalBars: any;
  verticalBars: any;
  stanza1: any;
  stanza2: any;
  stanza3: any;
  barsCount: Array<any> = new Array(8);

  scrollAt = 0;
  showHorizontalBars = true;
  showVerticalBars = false;
  showStanza1 = false;
  showStanza2 = false;
  showStanza3 = false;
  showStanza4 = false;

  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.horizontalBars = document.getElementsByClassName('horizontal-bars');
    this.verticalBars = document.getElementsByClassName('vertical-bars');
    this.stanza1 = document.getElementById('stanza1');
    this.stanza2 = document.getElementById('stanza2');
    this.stanza3 = document.getElementById('stanza3');
  }

  onScroll(e: Event) {
    let background = e.target as Element;
    this.scrollAt = background.scrollTop;
    console.log(this.scrollAt / background.clientHeight);

    if (this.scrollAt < background.clientHeight * 2) {
      this.showStanza1 = true
      // for (let i = 0; i < this.horizontalBars.length; i++) {
      //   this.horizontalBars.item(i)?.setAttribute('style', 'left: ' + (Math.max((100 - ((this.scrollAt / background.clientHeight) * 100)) + (10*i), -5)) + '%');
      // }
      let change = (((this.scrollAt) / background.clientHeight) * 100);
      this.stanza1?.setAttribute('style', 'clip-path: polygon(' +
      // First bar top corner
      (Math.min(Math.max((100 - change) + 87.5, 0), 100)) + '% ' +
      '0%, ' +
      // First bar bottom corner
      (Math.min(Math.max((100 - change) + 87.5, 0), 100)) + '% ' +
      '12.5%, ' +
      // Second bar bottom corner
      (Math.min(Math.max((100 - change) + 75, 0), 100)) + '% ' +
      '12.5%, ' +
      // Second bar bottom corner
      (Math.min(Math.max((100 - change) + 75, 0), 100)) + '% ' +
      '25%, ' +
      // Third bar bottom corner
      (Math.min(Math.max((100 - change) + 62.5, 0), 100)) + '% ' +
      '25%, ' +
      // Third bar bottom corner
      (Math.min(Math.max((100 - change) + 62.5, 0), 100)) + '% ' +
      '37.5%, ' +
      // Fourth bar bottom corner
      (Math.min(Math.max((100 - change) + 50, 0), 100)) + '% ' +
      '37.5%, ' +
      // Fourth bar bottom corner
      (Math.min(Math.max((100 - change) + 50, 0), 100)) + '% ' +
      '50%, ' +
      // Fifth bar bottom corner
      (Math.min(Math.max((100 - change) + 37.5, 0), 100)) + '% ' +
      '50%, ' +
      // Fifth bar bottom corner
      (Math.min(Math.max((100 - change) + 37.5, 0), 100)) + '% ' +
      '62.5%, ' +
      // Sixth bar bottom corner
      (Math.min(Math.max((100 - change) + 25, 0), 100)) + '% ' +
      '62.5%, ' +
      // Sixth bar bottom corner
      (Math.min(Math.max((100 - change) + 25, 0), 100)) + '% ' +
      '75%, ' +
      // Seventh bar bottom corner
      (Math.min(Math.max((100 - change) + 12.5, 0), 100)) + '% ' +
      '75%, ' +
      // Seventh bar bottom corner
      (Math.min(Math.max((100 - change) + 12.5, 0), 100)) + '% ' +
      '87.5%, ' +
      // Eighth bar bottom corner
      (Math.min(Math.max((100 - change), 0), 100)) + '% ' +
      '87.5%, ' +
      // Eighth bar bottom corner
      (Math.min(Math.max((100 - change), 0), 100)) + '% ' +
      '100%, ' +
      // Bottom right corner
      '100% ' +
      '100%, ' +
      // Top right corner
      '100% ' +
      '0%');
    } else if (this.scrollAt < background.clientHeight * 4) {
      this.showStanza1 = true;
      // for (let i = 0; i < this.verticalBars.length; i++) {
      //   this.verticalBars.item(i)?.setAttribute('style', 'top: ' + (Math.min(Math.max(((((this.scrollAt - (background.clientHeight * 3) )/ background.clientHeight) * 100)) + (10*i), -5), 105)) + '%');
      // }
      let change = (((this.scrollAt - (background.clientHeight * 2)) / background.clientHeight) * 100);
      this.stanza1?.setAttribute('style', 'clip-path: polygon(' +
      // First bar top corner
      '0% ' +
      (Math.min(Math.max((100 - change) + 87.5, 0), 100)) + '%, ' +
      // First bar bottom corner
      '12.5% ' +
      (Math.min(Math.max((100 - change) + 87.5, 0), 100)) + '%, ' +
      // Second bar bottom corner
      '12.5% ' +
      (Math.min(Math.max((100 - change) + 75, 0), 100)) + '%, ' +
      // Second bar bottom corner
      '25% ' +
      (Math.min(Math.max((100 - change) + 75, 0), 100)) + '%, ' +
      // Third bar bottom corner
      '25% ' +
      (Math.min(Math.max((100 - change) + 62.5, 0), 100)) + '%, ' +
      // Third bar bottom corner
      '37.5% ' +
      (Math.min(Math.max((100 - change) + 62.5, 0), 100)) + '%, ' +
      // Fourth bar bottom corner
      '37.5% ' +
      (Math.min(Math.max((100 - change) + 50, 0), 100)) + '%, ' +
      // Fourth bar bottom corner
      '50% ' +
      (Math.min(Math.max((100 - change) + 50, 0), 100)) + '%, ' +
      // Fifth bar bottom corner
      '50% ' +
      (Math.min(Math.max((100 - change) + 37.5, 0), 100)) + '%, ' +
      // Fifth bar bottom corner
      '62.5% ' +
      (Math.min(Math.max((100 - change) + 37.5, 0), 100)) + '%, ' +
      // Sixth bar bottom corner
      '62.5% ' +
      (Math.min(Math.max((100 - change) + 25, 0), 100)) + '%, ' +
      // Sixth bar bottom corner
      '75% ' +
      (Math.min(Math.max((100 - change) + 25, 0), 100)) + '%, ' +
      // Seventh bar bottom corner
      '75% ' +
      (Math.min(Math.max((100 - change) + 12.5, 0), 100)) + '%, ' +
      // Seventh bar bottom corner
      '87.5% ' +
      (Math.min(Math.max((100 - change) + 12.5, 0), 100)) + '%, ' +
      // Eighth bar bottom corner
      '87.5% ' +
      (Math.min(Math.max((100 - change), 0), 100)) + '%, ' +
      // Eighth bar bottom corner
      '100% ' +
      (Math.min(Math.max((100 - change), 0), 100)) + '%, ' +
      // Top left corner
      '100% ' +
      '0%, ' +
      // Top right corner
      '0% ' +
      '0%');
    } else {
      this.showStanza1 = false;
    }

    if (this.scrollAt > background.clientHeight * 2 && this.scrollAt < background.clientHeight * 6) {
      this.showStanza2 = true;
    } else {
      this.showStanza2 = false;
    }

    if (this.scrollAt > background.clientHeight * 4) {
      this.showStanza3 = true;
      let slowChange = (((this.scrollAt - (background.clientHeight * 4) )/ background.clientHeight) * 25);
      let fastChange = (((this.scrollAt - (background.clientHeight * 4) )/ background.clientHeight) * 50);
      this.stanza3?.setAttribute('style', 'clip-path: polygon(' +
      // Top left corner
      (Math.min(Math.max((50 - slowChange), 0), 50)) + '% ' +
      (Math.min(Math.max((50 - slowChange), 0), 50)) + '%, ' +
      // Top middle corner
      '50% ' +
      (Math.min(Math.max((50 - fastChange), 0), 50)) + '%, ' +
      // Top right corner
      (Math.min(Math.max((50 + slowChange), 50), 100)) + '% ' +
      (Math.min(Math.max((50 - slowChange), 0), 50)) + '%, ' +
      // Middle right corner
      (Math.min(Math.max((50 + fastChange), 50), 100)) + '% ' +
      '50%, ' +
      // Bottom right corner
      (Math.min(Math.max((50 + slowChange), 50), 100)) + '% ' +
      (Math.min(Math.max((50 + slowChange), 50), 100)) + '%, ' +
      // Bottom middle corner
      '50% ' +
      (Math.min(Math.max((50 + fastChange), 50), 100)) + '%, ' +
      // Bottom left corner
      (Math.min(Math.max((50 - slowChange), 0), 50)) + '% ' +
      (Math.min(Math.max((50 + slowChange), 50), 100)) + '%,' +
      // Middle left corner
      (Math.min(Math.max((50 - fastChange), 0), 50)) + '% ' +
      '50%');
    } else {
      this.showStanza3 = false;
    }

    if (this.scrollAt > background.clientHeight * 6.9) {
      this.showStanza4 = true;
      let change = (((this.scrollAt - (background.clientHeight * 7)) / background.clientHeight) * 75);

      let outRights = document.getElementsByClassName('stanza-1-line-1');
      for (let i = 0; i < outRights.length; i++) {
        outRights.item(i)?.setAttribute('style', 'transform: translateX(' + Math.max(change - (i * 10), 0) + 'vw)')
      }

      let outLefts = document.getElementsByClassName('stanza-1-line-2');
      for (let i = 0; i < outLefts.length; i++) {
        outLefts.item(i)?.setAttribute('style', 'transform: translateX(' + Math.min((-change + (i * 10)), 0) + 'vw)')
      }

      let inLefts = document.getElementsByClassName('stanza-2-line-1');
      for (let i = 0; i < inLefts.length; i++) {
        inLefts.item(i)?.setAttribute('style', 'transform: translateX(' + Math.min(change - (i * 10) - 100, 0) + 'vw)')
      }

      let inRights = document.getElementsByClassName('stanza-2-line-2');
      for (let i = 0; i < inRights.length; i++) {
        inRights.item(i)?.setAttribute('style', 'transform: translateX(' + Math.max(100 + (i * 10) - change, 0) + 'vw)')
      }
    } else {
      this.showStanza4 = false;
    }

  }
}
