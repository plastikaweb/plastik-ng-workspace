import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterStateSnapshot } from '@angular/router';
import { RouterStateSerializer } from '@ngrx/router-store';

import * as fromRouterState from './state/router/router-state.reducer';

export class CustomRouterSerializer implements RouterStateSerializer<fromRouterState.RouterState> {
  serialize(routerState: RouterStateSnapshot): fromRouterState.RouterState {
    let snapshot = routerState.root;
    while (snapshot.firstChild) {
      snapshot = snapshot.firstChild;
    }

    const {
      url,
      root: { queryParams },
    } = routerState;
    const {
      params,
      data: { title },
    } = snapshot;

    return {
      url,
      params,
      queryParams,
      title: title || '',
    };
  }
}

@NgModule({
  imports: [CommonModule],
})
export class RouterStateModule {}
