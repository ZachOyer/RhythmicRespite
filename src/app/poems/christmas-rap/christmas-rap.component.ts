import { Component, OnInit } from '@angular/core';
import { faEllipsis, faSnowflake } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-christmas-rap',
  templateUrl: './christmas-rap.component.html',
  styleUrls: ['./christmas-rap.component.sass']
})
export class ChristmasRapComponent implements OnInit {
  faEllipsis = faEllipsis;
  faFlake = faSnowflake;

  snowLoop = [0,1]
  flakeLoop = new Array<number>(150)

  constructor() { }

  ngOnInit(): void {
  }

}
