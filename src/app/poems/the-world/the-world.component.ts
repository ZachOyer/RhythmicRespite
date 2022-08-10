import { Component, OnInit } from '@angular/core';
import { faShuttleSpace } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-the-world',
  templateUrl: './the-world.component.html',
  styleUrls: ['./the-world.component.sass']
})
export class TheWorldComponent implements OnInit {
  faRocket = faShuttleSpace;

  constructor() { }

  ngOnInit(): void {
  }

}
