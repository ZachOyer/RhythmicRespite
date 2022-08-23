import { Component, OnInit } from '@angular/core';
import { faCarSide } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-mirrored-glass',
  templateUrl: './mirrored-glass.component.html',
  styleUrls: ['./mirrored-glass.component.sass']
})
export class MirroredGlassComponent implements OnInit {
  faTest = faCarSide;

  constructor() { }

  ngOnInit(): void {
  }

}
