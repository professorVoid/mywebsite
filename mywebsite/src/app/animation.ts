import { trigger,transition, style, query, animateChild, group, animate } from "@angular/animations";

export const slideInAnimation = trigger('routeAnimations', [
  transition('* <=> *', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
      }),
    ]),
    query(':enter', [style({ left: '-100%' })]),
    query(':leave', animateChild()),
    group([
      query(':leave', [animate('500ms ease-in-out', style({ opacity: 0 }))]),
      query(':enter', [animate('300ms ease-in-out', style({ left: '0%' }))]),
      query('@*', animateChild(), { optional: true }),
    ]),
  ]),
]);
