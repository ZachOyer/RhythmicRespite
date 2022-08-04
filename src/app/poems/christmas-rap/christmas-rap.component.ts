import { Component, OnInit } from '@angular/core';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-christmas-rap',
  templateUrl: './christmas-rap.component.html',
  styleUrls: ['./christmas-rap.component.sass']
})
export class ChristmasRapComponent implements OnInit {
  faEllipsis = faEllipsis

  constructor() { }

  ngOnInit(): void {
  }

}
