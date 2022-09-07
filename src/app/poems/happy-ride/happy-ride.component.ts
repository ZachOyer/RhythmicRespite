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
    adjustVolume(this.audio, 0)
    // Actually stop the music after it fades out
    setTimeout(() => {
      this.audio.pause();
    }, 1500);
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.audio.play();
      this.audio.volume = 0.05;
      adjustVolume(this.audio, 0.2);
    }, 1000)
  }

}

export async function adjustVolume(
  element: HTMLMediaElement,
  newVolume: number,
  {
      duration = 1500,
      easing = swing,
      interval = 13,
  }: {
      duration?: number,
      easing?: typeof swing,
      interval?: number,
  } = {},
): Promise<void> {
  const originalVolume = element.volume;
  const delta = newVolume - originalVolume;

  if (!delta || !duration || !easing || !interval) {
      element.volume = newVolume;
      return Promise.resolve();
  }

  const ticks = Math.floor(duration / interval);
  let tick = 1;

  return new Promise(resolve => {
      const timer = setInterval(() => {
          element.volume = originalVolume + (
              easing(tick / ticks) * delta
          );

          if (++tick === ticks + 1) {
              clearInterval(timer);
              resolve();
          }
      }, interval);
  });
}

export function swing(p: number) {
  return 0.5 - Math.cos(p * Math.PI) / 2;
}
