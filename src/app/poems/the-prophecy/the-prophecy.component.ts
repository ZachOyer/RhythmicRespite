import { Component, OnInit } from '@angular/core';
import { faChildren, faUser, faUserGroup } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-the-prophecy',
  templateUrl: './the-prophecy.component.html',
  styleUrls: ['./the-prophecy.component.sass']
})
export class TheProphecyComponent implements OnInit {
  faUser = faChildren;

  constructor() { }

  ngOnInit(): void {
  }

}
