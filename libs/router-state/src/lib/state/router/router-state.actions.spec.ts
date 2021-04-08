import * as fromRouterStateActions from './router-state.actions';

describe('RouterState Actions', () => {
  it('should dispatch de Go action', () => {
    const payload = {
      path: ['/'],
      query: {},
      extras: {
        queryParams: { page: 1 },
      },
    };
    const action = fromRouterStateActions.go(payload);
    expect({ ...action }).toEqual({
      type: fromRouterStateActions.go.type,
      ...payload,
    });
  });

  it('should dispatch de Back action', () => {
    const action = fromRouterStateActions.back();
    expect({ ...action }).toEqual({
      type: fromRouterStateActions.back.type,
    });
  });

  it('should dispatch de Forward action', () => {
    const action = fromRouterStateActions.forward();
    expect({ ...action }).toEqual({
      type: fromRouterStateActions.forward.type,
    });
  });
});
