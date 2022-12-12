import { Component, OnInit } from '@angular/core';
import { faArrowDown, faArrowDownLong } from '@fortawesome/free-solid-svg-icons';
import { StyleService } from 'src/app/style.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.sass']
})
export class ChildComponent implements OnInit {
  faDown = faArrowDownLong;
  color = 0;
  isMobile = false;
  scrollHandler = this.scrollingAnimations.bind(this);

  constructor(public styling: StyleService) { }

  ngOnInit(): void {
    for (let i = 1; i <= 21; i++) {
      this.addOpacityScrolling('line' + i, (i*37.5) - 100, (i*37.5) + window.innerHeight - 250);
    }

    this.isMobile = this.styling.getIsMobile()
    window.addEventListener("scroll", this.scrollHandler);
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    // console.log('On destroy?')
    window.removeEventListener("scroll", this.scrollHandler);
  }

  scrollingAnimations() {
    // Variables
    let titleHeight = document.getElementById('title')?.offsetHeight || 0;
    let stanza1Height = document.getElementById('stanza1')?.offsetHeight || 0;
    let space1Height = document.getElementById('space1')?.offsetHeight || 0;
    let stanza2Height = document.getElementById('stanza2')?.offsetHeight || 0;

    // Scrolling effect for the background
    if (window.scrollY > titleHeight + stanza1Height - (window.innerHeight / 2) && window.scrollY < titleHeight + stanza1Height + (window.innerHeight / 4)) {
      this.color = (window.scrollY - (titleHeight + stanza1Height - (window.innerHeight / 2))) / (3 * window.innerHeight / 4);
      document.getElementsByClassName('my-container')[0].setAttribute('style', 'background-color: rgb(' + (this.color * 0) + ', ' + (this.color * 107) + ', ' + (this.color * 107) + ')');
    } else if (window.scrollY > titleHeight + stanza1Height + space1Height + stanza2Height - (window.innerHeight / 2) && window.scrollY < titleHeight + stanza1Height + space1Height + stanza2Height + (window.innerHeight / 4)) {
      this.color = (window.scrollY - (titleHeight + stanza1Height + space1Height + stanza2Height - (window.innerHeight / 2))) / (3 * window.innerHeight / 4);
      document.getElementsByClassName('my-container')[0].setAttribute('style', 'background-color: rgb(' + (this.color * 124) + ', ' + (this.color * -57 + 107) + ', ' + (this.color * -1 + 107) + ')');
    }

    // Scrolling effect for the first stanza
    let stanza1offset = 0;
    for (let i = 1; i <= 20; i++) {
      if (this.styling.getIsMobile()) {
        this.addOpacityScrolling('line' + i, stanza1offset - 80, stanza1offset + window.innerHeight - 120);
      } else {
        this.addOpacityScrolling('line' + i, stanza1offset - 100, stanza1offset + window.innerHeight - 200);
      }
      stanza1offset += document.getElementById('line' + i)?.offsetHeight || 0;
    }

    // Scrolling effect for the second stanza
    let stanza2offset = stanza1Height + titleHeight;
    for (let i = 21; i <= 38; i++) {
      if (this.styling.getIsMobile()) {
        this.addOpacityScrolling('line' + i, stanza2offset - 200, stanza2offset + window.innerHeight - 250);
      } else {
        this.addOpacityScrolling('line' + i, stanza2offset - 300, stanza2offset + window.innerHeight - 400);
      }
      stanza2offset += document.getElementById('line' + i)?.offsetHeight || 0;
    }

    // Scrolling effect for the third stanza
    let stanza3offset = stanza1Height + titleHeight + space1Height + stanza2Height;
    for (let i = 39; i <= 50; i++) {
      if (this.styling.getIsMobile()) {
        this.addOpacityScrolling('line' + i, stanza3offset - 200, stanza3offset + window.innerHeight - 250);
      } else {
        this.addOpacityScrolling('line' + i, stanza3offset - 300, stanza3offset + window.innerHeight - 400);
      }
      stanza3offset += document.getElementById('line' + i)?.offsetHeight || 0;
    }

    // Scrolling effect for the back button.
    if (window.scrollY + window.innerHeight === document.body.offsetHeight) {
      document.getElementById('back')?.setAttribute('style', 'opacity: 1; transform: translate(-50%, -50%)')
    } else {
      document.getElementById('back')?.setAttribute('style', 'opacity: 0; transform: translate(-50%, 200%)')
    }
  }

  addOpacityScrolling(id: string, lowerLimit: number, upperLimit: number) {
    // Adds scrolling to an element using its id. Will fade in when the scrolling gets to lowerLimit, and fade out when the scrolling gets to upperlimit
    // NOTE: Since scrolling starts at the top of the screen and goes down, lower limit refers to the cut off at the top of the screen and upper limit refers to
    // the cut off at the bottom of the screen
    let currentScroll = window.scrollY;
    let opacity = 0;
    if (currentScroll >= lowerLimit && currentScroll <= upperLimit) {
      if (currentScroll - lowerLimit < 80) {
        opacity = 0 + ((currentScroll - lowerLimit) / 80);
      } else if (upperLimit - currentScroll < 80) {
        opacity = 0 + ((upperLimit - currentScroll) / 80);
      } else {
        opacity = 1
      }
    }
    document.getElementById(id)?.setAttribute('style', 'opacity: ' + opacity + '; transform: translateX(' + Math.abs(opacity * -30 + 30) +'px)');
  }

  changeBackground() {
    document.getElementsByClassName('my-container')[0].setAttribute('style', 'background-color: rgb(0,0,0)');
  }

}
