import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-mirrored-glass',
  templateUrl: './mirrored-glass.component.html',
  styleUrls: ['./mirrored-glass.component.sass'],
  animations: [
    trigger('flyInTop', [
      transition('void => *', [
        style({ transform: 'translateY(-40%)', opacity: 0}),
        animate('1s ease-out'),
        style({ transform: 'translateY(0%)', opacity: 1})
      ])
    ]),
    trigger('flyInBottom', [
      transition('void => *', [
        style({ transform: 'translateY(40%)', opacity: 0}),
        animate('1s ease-out'),
        style({ transform: 'translateY(0%)', opacity: 1})
      ])
    ]),

  ]
})
export class MirroredGlassComponent implements OnInit {
  fadeIn = false;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.fadeIn = true;
    }, 1400)
  }

}
