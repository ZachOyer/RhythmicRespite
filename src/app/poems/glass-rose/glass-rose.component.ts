import { Component, OnInit } from '@angular/core';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-glass-rose',
  templateUrl: './glass-rose.component.html',
  styleUrls: ['./glass-rose.component.sass']
})
export class GlassRoseComponent implements OnInit {
  faPetal = faLeaf;

  petalsLoop = new Array<number>(2);
  petalLoop = new Array<number>(100);

  constructor() { }

  ngOnInit(): void {
  }

}
