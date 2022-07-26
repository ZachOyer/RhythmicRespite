import { Component } from '@angular/core';
import { appAnimations } from './app-animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  animations: [ appAnimations ],
})
export class AppComponent {
  getState(outlet: any) {
    // Changing the activatedRouteData.state triggers the animation
    return outlet.activatedRouteData.state;
  }
}
