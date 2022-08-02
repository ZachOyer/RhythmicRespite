import { Component, OnInit } from '@angular/core';
import { faBolt, faChevronLeft, faChevronRight, faHeart, faPerson, faRotateLeft, faStar, faUser, faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-second-poem',
  templateUrl: './second-poem.component.html',
  styleUrls: ['./second-poem.component.sass']
})
export class SecondPoemComponent implements OnInit {
  faPerson = faPerson;
  faRight = faChevronRight;
  faLeft = faChevronLeft;
  faLike = faHeart;
  faDislike = faXmark;
  faSuperLike = faStar;
  faBoost = faBolt;
  faRedo = faRotateLeft;

  constructor() { }

  ngOnInit(): void {
  }

}
