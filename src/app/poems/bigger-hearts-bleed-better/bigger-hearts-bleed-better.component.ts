import { AnimationEvent, animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowCircleLeft, faDroplet, faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-bigger-hearts-bleed-better',
  templateUrl: './bigger-hearts-bleed-better.component.html',
  styleUrls: ['./bigger-hearts-bleed-better.component.sass'],
  animations: [
    trigger('fadeInTopOutBottom', [
      transition('* => void', [
        animate('0.7s ease-in'),
        style({ transform: 'translateY(-20%)', opacity: 0})
      ]),
      transition('void => *', [
        style({ transform: 'translateY(20%)', opacity: 0}),
        animate('0.7s 0.4s ease-out'),
        style({ transform: 'translateY(0%)', opacity: 1})
      ])
    ]),
    trigger('fadeInLeftOutRight', [
      transition('* => void', [
        animate('0.7s ease-in'),
        style({ transform: 'rotateX(15deg) rotateY(15deg) rotateZ(-3deg) translateY(4%)', opacity: 0, 'box-shadow': '0px 0px 0px 0px #000000dd'})
      ]),
      transition('void => *', [
        style({ transform: 'rotateX(15deg) rotateY(15deg) rotateZ(-3deg) translateX(-2%) translateY(3%)', opacity: 0, 'box-shadow': '0px 0px 0px 0px #000000dd'}),
        animate('0.7s 0.4s ease-out'),
        style({ transform: 'rotateX(15deg) rotateY(15deg) rotateZ(-3deg) translateX(0%) translateY(0%)', opacity: 1, 'box-shadow': '-4px 7px 10px 5px #00000069'})
      ])
    ]),
    trigger('flyLeftRight', [
      transition('* => void', [
        animate('0.4s ease-in-out'),
        style({ transform: 'translate(-70%, 0%)', opacity: 0})
      ]),
      transition('void => *', [
        style({ transform: 'translate(-30%, 0%)', opacity: 0}),
        animate('0.4s 0.2s ease-in-out'),
        style({ transform: 'translate(-50%, 0%)', opacity: 1})
      ])
    ]),
  ]
})
export class BiggerHeartsBleedBetterComponent implements OnInit {
  faHeart = faHeart
  faDrop = faDroplet
  faLeave = faArrowCircleLeft

  showCard = 0;
  animating = false;


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  showNextCard() {
    if (this.animating) {
      return;
    } else if (this.showCard === 6) {
      this.router.navigateByUrl('welcome');
    }

    this.animating = true;
    // Increment the showCard variable by a halfstep
    // The rest is handled by the animation transition function
    this.showCard = this.showCard + 0.5;
  }

  showTransitionText(event: AnimationEvent) {
    if (event.toState == 'void' && event.element.classList.contains('my-card')) {
      // If the card has finished disappearing, show the transition text
      this.showCard = this.showCard + 0.5;
    } else if (event.toState == null && event.element.classList.contains('my-card')) {
      this.animating = false;
    } else if (event.toState == 'void' && event.element.classList.contains('transition-text')) {
      this.showCard = this.showCard + 0.5;
    } else if (event.toState == null && event.element.classList.contains('transition-text')) {
      setTimeout(() => {
        this.showCard = this.showCard + 0.5
      }, 1500)
    }
  }

}
