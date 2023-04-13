import { Component, OnInit } from '@angular/core';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-love-life-literature',
  templateUrl: './love-life-literature.component.html',
  styleUrls: ['./love-life-literature.component.sass']
})
export class LoveLifeLiteratureComponent implements OnInit {
  bookmark = faBookmark;

  constructor() { }

  ngOnInit(): void {
    const test = document.getElementById('animated');
    if (test) {
      test.addEventListener('animationend', () => {
        test.style.backgroundPosition = '0% center';
      })
    }
  }

  testing() {
    console.log("Hello");
  }
}
