import { Component, OnInit } from '@angular/core';
import { faGlasses, faMartiniGlass, faWineBottle, faWineGlass, faWineGlassEmpty } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-speak-english',
  templateUrl: './speak-english.component.html',
  styleUrls: ['./speak-english.component.sass']
})
export class SpeakEnglishComponent implements OnInit {
  faBottle = faWineBottle;
  faGlassEmpty = faWineGlassEmpty;
  faGlassFull = faWineGlass;
  faGlasses = faGlasses;
  faMartini = faMartiniGlass;

  constructor() { }

  ngOnInit(): void {
  }

}
