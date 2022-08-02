import { Component, OnInit } from '@angular/core';
import { faCarSide, faHouseChimneyCrack } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-happy-ride',
  templateUrl: './happy-ride.component.html',
  styleUrls: ['./happy-ride.component.sass']
})
export class HappyRideComponent implements OnInit {
  faCracked = faHouseChimneyCrack;
  faBack = faCarSide;


  constructor() { }

  ngOnInit(): void {
  }

}
