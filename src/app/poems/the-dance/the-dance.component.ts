import { Component, OnInit } from '@angular/core';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-the-dance',
  templateUrl: './the-dance.component.html',
  styleUrls: ['./the-dance.component.sass']
})
export class TheDanceComponent implements OnInit {
  faRight = faArrowRight;
  faLeft = faArrowLeft;

  lines: HTMLCollectionOf<Element> | null = null;

  index = 0;

  constructor() { }

  ngOnInit(): void {
    this.initializeLines();
  }

  initializeLines() {
    this.lines = document.getElementsByClassName('stanza');
    for (let i = 0; i < this.lines.length; i++) {
      if (i > 2) {
        this.lines.item(i)?.setAttribute('style', 'transform: translate(' + ((100 * Math.sin(2)) - 50) + '%, -' + ((100 * Math.abs(2)) + 50) + '%) rotateY(' + this.clamp((90 * (2)), -90, 90) + 'deg) rotateZ(' + (5 * -(2)) + 'deg)')
      } else {
        this.lines.item(i)?.setAttribute('style', 'transform: translate(' + ((100 * Math.sin(i - this.index)) - 50) + '%, -' + ((50 * Math.abs(i - this.index)) + 50) + '%) rotateY(' + this.clamp((90 * (i - this.index)), -90, 90) + 'deg) rotateZ(' + (5 * -(i - this.index)) + 'deg)')
      }
    }
  }

  displayLines(newIndex: number) {
    this.lines = document.getElementsByClassName('stanza');
    if (newIndex >= 0 && newIndex < this.lines.length) {
      let min = Math.max(0, newIndex - 2);
      let max = Math.min(this.lines.length, newIndex + 2);
      this.index = newIndex;
      for (let i = min; i < max; i++) {
        this.lines.item(i)?.setAttribute('style', 'transform: translate(' + ((100 * Math.sin(i - this.index)) - 50) + '%, -' + ((50 * Math.abs(i - this.index)) + 50) + '%) rotateY(' + this.clamp((90 * (i - this.index)), -90, 90) + 'deg) rotateZ(' + (5 * -(i - this.index)) + 'deg)')
      }
    }
  }

  clamp(value: number, min: number, max: number): number {
    return Math.min(Math.max(value, min), max);
  }
}
