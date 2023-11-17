import { Component, OnInit } from '@angular/core';
import { faBookmark, faCertificate, faSplotch } from '@fortawesome/free-solid-svg-icons';




@Component({
  selector: 'app-reasons',
  templateUrl: './reasons.component.html',
  styleUrls: ['./reasons.component.sass']
})
export class ReasonsComponent implements OnInit {
  bookmark = faBookmark;
  pageIndex = 0;

  constructor() { }

  ngOnInit(): void {
    const test = document.getElementById('animated');
    if (test) {
      test.addEventListener('animationend', () => {
        test.style.backgroundPosition = '0% center';
      })
    }
  }

  turnPage() {
    this.pageIndex++;
  }
}
