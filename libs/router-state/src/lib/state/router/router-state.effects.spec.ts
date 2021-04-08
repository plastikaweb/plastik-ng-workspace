import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { EffectsMetadata, getEffectsMetadata } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { DataPersistence, NxModule } from '@nrwl/angular';

import { Observable } from 'rxjs';

import { RouterStateEffects } from './router-state.effects';

describe('RouterState Effects', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let actions: Observable<any>;
  let effects: RouterStateEffects;
  let metadata: EffectsMetadata<RouterStateEffects>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, NxModule.forRoot()],
      providers: [RouterStateEffects, DataPersistence, provideMockActions(() => actions), provideMockStore()],
    });

    effects = TestBed.inject(RouterStateEffects);
    metadata = getEffectsMetadata(effects);
  });

  describe('navigate$', () => {
    it('should register navigate$ that dispatches no action', () => {
      expect(metadata.navigate$).toEqual({
        dispatch: false,
        useEffectsErrorHandler: true,
      });
    });
  });

  describe('navigateBack$', () => {
    it('should register navigateBack$ that dispatches no action', () => {
      expect(metadata.navigateBack$).toEqual({
        dispatch: false,
        useEffectsErrorHandler: true,
      });
    });
  });

  describe('navigateForward$', () => {
    it('should register navigateForward$ that dispatches no action', () => {
      expect(metadata.navigateForward$).toEqual({
        dispatch: false,
        useEffectsErrorHandler: true,
      });
    });
  });

  describe('updateTitle$', () => {
    it('should register updateTitle$ that dispatches no action', () => {
      expect(metadata.updateTitle$).toEqual({
        dispatch: false,
        useEffectsErrorHandler: true,
      });
    });
  });

  describe('scrollToTop$', () => {
    it('should register scrollToTop$ that dispatches no action', () => {
      expect(metadata.scrollToTop$).toEqual({
        dispatch: false,
        useEffectsErrorHandler: true,
      });
    });
  });
});
