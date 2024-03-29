import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { faCaretDown, faCircleLeft, faCircleQuestion, faCircleXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-find-it-quick',
  templateUrl: './find-it-quick.component.html',
  styleUrls: ['./find-it-quick.component.sass'],
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
export class FindItQuickComponent implements OnInit {
  faContinue = faCaretDown;
  faHelp = faCircleQuestion;
  faLeave = faCircleLeft;

  showStanza2 = false;
  showStanza3 = false;
  showStanza4 = false;
  showStanza5 = false;
  showStanza6 = false;
  public isCollapsed = true;

  constructor() { }

  ngOnInit(): void {
  }

}
