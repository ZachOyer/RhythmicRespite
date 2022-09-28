import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbOffcanvas, OffcanvasDismissReasons } from '@ng-bootstrap/ng-bootstrap';




@Component({
  selector: 'app-reasons',
  templateUrl: './reasons.component.html',
  styleUrls: ['./reasons.component.sass']
})
export class ReasonsComponent implements OnInit {

  constructor(private offcan: NgbOffcanvas,
              private router: Router) { }

  ngOnInit(): void {
  }
}
