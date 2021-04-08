import { NavigationExtras } from '@angular/router';
import { createAction, props } from '@ngrx/store';

export const go = createAction(
  '[Router] Go',
  props<{
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    path: any[];
    query?: Record<string, unknown>;
    extras?: NavigationExtras;
  }>(),
);

export const back = createAction('[Router] Back');

export const forward = createAction('[Router] Forward');
