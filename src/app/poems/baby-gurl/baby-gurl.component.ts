import { Component, OnInit } from '@angular/core';
import { faFaceGrinHearts, faFaceKissWinkHeart, faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-baby-gurl',
  templateUrl: './baby-gurl.component.html',
  styleUrls: ['./baby-gurl.component.sass']
})
export class BabyGurlComponent implements OnInit {
  faHeart = faHeart;
  faFace1 = faFaceGrinHearts;
  faFace2 = faFaceKissWinkHeart;

  constructor() { }

  ngOnInit(): void {
  }

}
