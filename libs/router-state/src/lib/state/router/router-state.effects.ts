import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ROUTER_NAVIGATED, ROUTER_NAVIGATION } from '@ngrx/router-store';
import { Store } from '@ngrx/store';
import { RouterStatePartialState, selectRouterDataTitle } from '@plastik-ng-workspace/router-state';

import { tap, withLatestFrom } from 'rxjs/operators';

import * as RouterStateActions from './router-state.actions';

@Injectable()
export class RouterStateEffects {
  navigate$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(RouterStateActions.go),
        tap(action => this.router.navigate(action.path, { queryParams: action.query, ...action.extras })),
      ),
    { dispatch: false },
  );

  navigateBack$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(RouterStateActions.back),
        tap(() => this.location.back()),
      ),
    { dispatch: false },
  );

  navigateForward$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(RouterStateActions.forward),
        tap(() => this.location.forward()),
      ),
    { dispatch: false },
  );

  updateTitle$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ROUTER_NAVIGATED),
        withLatestFrom(this.store.select(selectRouterDataTitle)),
        tap(([, routerTitle]) => this.titleService.setTitle(routerTitle ? `PA3 admin: ${routerTitle}` : 'PA3 admin')),
      ),
    { dispatch: false },
  );

  scrollToTop$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ROUTER_NAVIGATION),
        tap(() => window.scrollTo(0, 0)),
      ),
    { dispatch: false },
  );

  constructor(
    private actions$: Actions,
    private router: Router,
    private location: Location,
    private store: Store<RouterStatePartialState>,
    private titleService: Title,
  ) {}
}
