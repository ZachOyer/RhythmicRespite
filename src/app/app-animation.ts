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
    transition('* => Welcome', [
      query(':enter, :leave',
        style({ position: 'fixed',  width: '100%' }),
        { optional: true }),
        group([
          query(':enter', [
            style({transform: 'translateY(-100%)'}),
            animate('1.5s ease-in-out',
            style({transform: 'translateY(0%)'}))
          ], { optional: true }),
          query(':leave', [
            style({ opacity: 1}),
            animate('0.3s 1.2s ease-in-out',
            style({ opacity: 0}))
          ], { optional: true }),
        ])
    ]),
    transition('Welcome => *', [
      query(':enter, :leave',
        style({ position: 'fixed', width: '100%' }),
        { optional: true }),
      group([
        query(':enter', [
          style({ opacity: 0}),
          animate('0.8s 1.2s ease-in-out',
          style({ opacity: 1}))
        ], { optional: true }),
        query(':leave', [
          style({ opacity: 1, transform: 'translateY(0%)' }),
          animate('1.5s ease-in-out',
          style({ opacity: 0, transform: 'translateY(-100%)' }))
        ], { optional: true }),
      ])
    ]),
    transition('Poem => SecondPoem', [
      query(':enter, :leave',
        style({ position: 'fixed',  width: '100%' }),
        { optional: true }),
        group([
          query(':enter', [
            style({ opacity: 0, transform: 'translateX(100%)'}),
            animate('1.5s ease-in-out',
            style({ opacity: 1, transform: 'translateX(0%)'}))
          ], { optional: true }),
          query(':leave', [
            style({ opacity: 1, transform: 'translateX(0%)'}),
            animate('1.5s ease-in-out',
            style({ opacity: 0, transform: 'translateX(-100%)'}),)
          ], { optional: true }),
        ])
    ]),
    transition('SecondPoem => Poem', [
      query(':enter, :leave',
        style({ position: 'fixed',  width: '100%' }),
        { optional: true }),
        group([
          query(':enter', [
            style({ opacity: 0, transform: 'translateX(-100%)'}),
            animate('1.5s ease-in-out',
            style({ opacity: 1, transform: 'translateX(0%)'}))
          ], { optional: true }),
          query(':leave', [
            style({ opacity: 1, transform: 'translateX(0%)'}),
            animate('1.5s ease-in-out',
            style({ opacity: 0, transform: 'translateX(100%)'}),)
          ], { optional: true }),
        ])
    ]),

  ]);




