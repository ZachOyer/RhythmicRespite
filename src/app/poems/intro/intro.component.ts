import { Component, OnInit } from '@angular/core';
import { faCarSide, faLeaf } from '@fortawesome/free-solid-svg-icons';
import { StyleService } from 'src/app/style.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.sass']
})
export class IntroComponent implements OnInit {
  faLeaf = faLeaf;
  faCar = faCarSide;

  leafArray = new Array<number>(10);
  windowArray1 = new Array<number>(5);
  windowArray2 = new Array<number>(4);
  windowArray3 = new Array<number>(6);

  constructor(public styleService: StyleService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.setGroundHeight();
  }

  setGroundHeight() {
    let backgroundHeight: number = document.getElementById('compBackground')?.offsetHeight || 0;
    let height = '';
    if (window.innerHeight - backgroundHeight > window.innerHeight / 10) {
      height = "height: " + (window.innerHeight - backgroundHeight) + 'px';
    } else {
      height = "height: 50px";
    }
    document.getElementById('ground')?.setAttribute('style', height);
  }

}
