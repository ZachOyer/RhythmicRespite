import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-mirrored-glass',
  templateUrl: './mirrored-glass.component.html',
  styleUrls: ['./mirrored-glass.component.sass'],
  animations: [
    trigger('flyInOutLeft', [
      transition('* => void', [
        animate('0.4s ease-in'),
        style({ transform: 'translateX(-20%)', opacity: 0})
      ]),
      transition('void => *', [
        style({ transform: 'translateX(-20%)', opacity: 0}),
        animate('0.4s 0.4s ease-out'),
        style({ transform: 'translateX(0%)', opacity: 1})
      ])
    ]),
    trigger('flyInOutRight', [
      transition('* => void', [
        animate('0.4s ease-in'),
        style({ transform: 'translateX(20%)', opacity: 0})
      ]),
      transition('void => *', [
        style({ transform: 'translateX(20%)', opacity: 0}),
        animate('0.4s 0.4s ease-out'),
        style({ transform: 'translateX(0%)', opacity: 1})
      ])
    ]),

  ]
})
export class MirroredGlassComponent implements OnInit {
  faContinue = faCaretDown;

  showStanza2 = false;
  showStanza3 = false;
  showStanza4 = false;
  showStanza5 = false;
  showStanza6 = false;

  constructor() { }

  ngOnInit(): void {
  }

}
