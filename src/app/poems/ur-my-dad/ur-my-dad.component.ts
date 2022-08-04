import { Component, OnInit } from '@angular/core';
import { faGlasses, faHandsHoldingChild, faHatCowboy, faPersonRays, faSun } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-ur-my-dad',
  templateUrl: './ur-my-dad.component.html',
  styleUrls: ['./ur-my-dad.component.sass']
})
export class UrMyDadComponent implements OnInit {
  faChild = faHandsHoldingChild;
  faCowboy = faHatCowboy;
  faGlasses = faGlasses;
  faSun = faSun;
  faOpen = faPersonRays;


  constructor() { }

  ngOnInit(): void {
  }

}
