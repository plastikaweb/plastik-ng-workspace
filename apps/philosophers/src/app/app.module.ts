import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import {
    NavigationActionTiming, RouterState, StoreRouterConnectingModule
} from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {
    CustomRouterSerializer, routerReducers, RouterStateEffects, RouterStateModule
} from '@plastik-ng-workspace/router-state';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    StoreModule.forRoot(
      { ...routerReducers },
      {
        metaReducers: !environment.production ? [] : [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
        },
      },
    ),
    StoreRouterConnectingModule.forRoot({
      serializer: CustomRouterSerializer,
      routerState: RouterState.Full,
      navigationActionTiming: NavigationActionTiming.PostActivation,
    }),
    EffectsModule.forRoot([RouterStateEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    RouterStateModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
