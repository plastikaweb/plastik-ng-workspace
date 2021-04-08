import { RouterReducerState } from '@ngrx/router-store';
import { createFeatureSelector, createSelector } from '@ngrx/store';

import { ROUTER_STATE_FEATURE_KEY, RouterState } from './router-state.reducer';

// Lookup the 'RouterState' feature state managed by NgRx
export const selectRouterFeatureState = createFeatureSelector<RouterReducerState<RouterState>>(ROUTER_STATE_FEATURE_KEY);

export const selectRouterUrl = createSelector(
  selectRouterFeatureState,
  (state: RouterReducerState<RouterState>) => state && state.state && state.state.url,
);
export const selectRouterParams = createSelector(
  selectRouterFeatureState,
  (state: RouterReducerState<RouterState>) => state && state.state && state.state.params,
);
export const selectRouterQueryParams = createSelector(
  selectRouterFeatureState,
  (state: RouterReducerState<RouterState>) => state && state.state && state.state.queryParams,
);

export const selectRouterDataTitle = createSelector(
  selectRouterFeatureState,
  (state: RouterReducerState<RouterState>) => state && state.state && state.state.title,
);
