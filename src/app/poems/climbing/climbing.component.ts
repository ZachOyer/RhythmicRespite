import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { StyleService } from 'src/app/services/style.service';

@Component({
  selector: 'app-climbing',
  templateUrl: './climbing.component.html',
  styleUrls: ['./climbing.component.sass']
})
export class ClimbingComponent implements OnInit {

  constructor(private el: ElementRef,
              private styleService: StyleService) { }

  ngOnInit(): void {
    // if (this.styleService.getNavToComponents()) {
    //   setTimeout(() => {
    //     this.scrollToBottom();
    //   }, 550)
    // }
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
  }

  scrollToBottom() {
    const ele = this.el.nativeElement as HTMLElement;

    ele.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
  }

}
