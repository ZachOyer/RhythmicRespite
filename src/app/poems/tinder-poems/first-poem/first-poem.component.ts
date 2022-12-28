import { Component, OnInit } from '@angular/core';
import { faBolt, faChevronLeft, faChevronRight, faHeart, faRotateLeft, faStar, faUser, faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-first-poem',
  templateUrl: './first-poem.component.html',
  styleUrls: ['./first-poem.component.sass']
})
export class FirstPoemComponent implements OnInit {
  faPerson = faUser;
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
