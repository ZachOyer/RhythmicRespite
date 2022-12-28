import { Component, OnInit } from '@angular/core';
import { faBolt, faChevronLeft, faChevronRight, faHeart, faRotateLeft, faStar, faUser, faUserTie, faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-third-poem',
  templateUrl: './third-poem.component.html',
  styleUrls: ['./third-poem.component.sass']
})
export class ThirdPoemComponent implements OnInit {
  faPerson = faUserTie;
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
