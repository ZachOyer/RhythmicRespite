import {
  transition,
  trigger,
  query,
  style,
  animate,
  group
} from '@angular/animations';

export const appAnimations =
  trigger('routeAnimations', [
    transition('Welcome <=> *', [
      query(':enter, :leave',
        style({ position: 'fixed', width: '100%' }),
        { optional: true }),
      group([
        query(':enter', [
          style({ opacity: 0}),
          animate('0.5s ease-in-out',
          style({ opacity: 1}))
        ], { optional: true }),
        query(':leave', [
          style({ opacity: 1 }),
          animate('0.5s ease-in-out',
          style({ opacity: 0 }))
        ], { optional: true }),
      ])
    ]),
    transition('Poem => SecondPoem, SecondPoem => ThirdPoem', [
      query(':enter, :leave',
        style({ position: 'fixed',  width: '100%' }),
        { optional: true }),
        group([
          query(':enter', [
            style({ 'z-index': '-1'}),
            animate('0.5s ease-in-out',
            style({ 'z-index': '-1'}))
          ], { optional: true }),
          query(':leave', [
            style({ transform: 'translateX(0%) translateY(0%) rotate(0deg)'}),
            animate('0.5s ease-in-out',
            style({ transform: 'translateX(-120%) translateY(10%) rotate(-15deg)'}),)
          ], { optional: true }),
        ])
    ]),
    transition('SecondPoem => Poem, ThirdPoem => SecondPoem', [
      query(':enter, :leave',
        style({ position: 'fixed',  width: '100%' }),
        { optional: true }),
        group([
          query(':enter', [
            style({ 'z-index': '-1'}),
            animate('0.5s ease-in-out',
            style({ 'z-index': '-1'}))
          ], { optional: true }),
          query(':leave', [
            style({ transform: 'translateX(0%) translateY(0%) rotate(0deg)'}),
            animate('0.5s ease-in-out',
            style({ transform: 'translateX(120%) translateY(10%) rotate(15deg)'}),)
          ], { optional: true }),
        ])
    ]),

  ]);




