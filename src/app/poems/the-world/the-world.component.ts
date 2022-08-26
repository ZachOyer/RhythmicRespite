import { Component, OnInit } from '@angular/core';
import { faFire, faFireFlameSimple, faMeteor, faRocket, faSatellite, faShuttleSpace } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-the-world',
  templateUrl: './the-world.component.html',
  styleUrls: ['./the-world.component.sass']
})
export class TheWorldComponent implements OnInit {
  faRocket = faShuttleSpace;
  faShuttleFlame = faFireFlameSimple;
  faSatellite = faSatellite;
  faFlyingRocket = faRocket;
  faFire = faFire;
  faMeteor = faMeteor;

  constructor() { }

  ngOnInit(): void {
  }

}
