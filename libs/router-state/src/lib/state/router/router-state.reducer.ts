import { Params } from '@angular/router';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';

export const ROUTER_STATE_FEATURE_KEY = 'router';

export interface RouterState {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  url: any;
  params: Params;
  queryParams: Params;
  title: string;
}

export interface RouterStatePartialState {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  readonly [ROUTER_STATE_FEATURE_KEY]: RouterReducerState<any>;
}

export const routerReducers: ActionReducerMap<RouterStatePartialState> = {
  [ROUTER_STATE_FEATURE_KEY]: routerReducer,
};
