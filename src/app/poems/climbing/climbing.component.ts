import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-climbing',
  templateUrl: './climbing.component.html',
  styleUrls: ['./climbing.component.sass']
})
export class ClimbingComponent implements OnInit {

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
  }

  // ngAfterViewInit(): void {
  //   //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
  //   //Add 'implements AfterViewInit' to the class.
  //   console.log("First")
  //   setTimeout(() => {
  //     console.log("Second")
  //     window.scrollTo(0, document.body.scrollHeight);
  //   }, 2000)
  // }

}
