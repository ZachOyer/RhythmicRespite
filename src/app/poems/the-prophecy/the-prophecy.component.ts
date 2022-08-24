import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { faChildren } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-the-prophecy',
  templateUrl: './the-prophecy.component.html',
  styleUrls: ['./the-prophecy.component.sass'],
  animations: [
    trigger('flyInBottom', [
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
  ]
})
export class TheProphecyComponent implements OnInit {
  faUser = faChildren;

  constructor() { }

  ngOnInit(): void {
  }

}
