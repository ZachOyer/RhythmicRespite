import { Component, OnInit } from '@angular/core';
import { faCarSide, faHouseChimneyCrack, faSignsPost } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-happy-ride',
  templateUrl: './happy-ride.component.html',
  styleUrls: ['./happy-ride.component.sass']
})
export class HappyRideComponent implements OnInit {
  faSign = faSignsPost;
  faBack = faCarSide;

  audio: HTMLAudioElement = new Audio('assets/happy-ride.m4a');


  constructor() { }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
  }

  ngOnInit(): void {
    this.audio.play()
  }

}
