import { Component, OnInit } from '@angular/core';
import { faEarthAmericas, faFire, faFireFlameSimple, faMeteor, faRocket, faSatellite, faShuttleSpace } from '@fortawesome/free-solid-svg-icons';

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
  faWorld = faEarthAmericas;

  starsLoop = [0, 1]
  shootingLoop = new Array<number>(15);
  starLoop = new Array<number>(500);

  constructor() { }

  ngOnInit(): void {
  }

}
