import { Component, OnInit } from '@angular/core';
import { faCertificate, faSplotch } from '@fortawesome/free-solid-svg-icons';




@Component({
  selector: 'app-reasons',
  templateUrl: './reasons.component.html',
  styleUrls: ['./reasons.component.sass']
})
export class ReasonsComponent implements OnInit {
  faStar = faSplotch;
  faAltStar = faCertificate;

  sparkles = new Array<number>(10)

  constructor() { }

  ngOnInit(): void {
  }
}
