import { Component, OnInit } from '@angular/core';
import { faMeteor, faRocket, faSatellite, faShuttleSpace, faUserAstronaut } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-the-world',
  templateUrl: './the-world.component.html',
  styleUrls: ['./the-world.component.sass']
})
export class TheWorldComponent implements OnInit {
  faRocket = faShuttleSpace;
  faSatellite = faSatellite;
  faFlyingRocket = faRocket;
  faMeteor = faMeteor;

  constructor() { }

  ngOnInit(): void {
  }

}
