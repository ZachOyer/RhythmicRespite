import { Component, OnInit } from '@angular/core';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-edgar-allen-poem',
  templateUrl: './edgar-allen-poem.component.html',
  styleUrls: ['./edgar-allen-poem.component.sass']
})
export class EdgarAllenPoemComponent implements OnInit {
  faPlaceholder = faEllipsisV;

  constructor() { }

  ngOnInit(): void {
  }

}
