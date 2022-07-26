import { Component, OnInit } from '@angular/core';
import { faCity, faCloudMoon, faMoon, faMountain, faSun } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.sass']
})
export class IntroComponent implements OnInit {
  faMoon = faCloudMoon;
  faSun = faSun;
  faMountain = faMountain;
  faCity = faCity;

  constructor() { }

  ngOnInit(): void {
  }

}
