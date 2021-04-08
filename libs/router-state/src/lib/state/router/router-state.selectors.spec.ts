import { routerMockState } from '../../mocks';
import {
    selectRouterDataTitle, selectRouterParams, selectRouterQueryParams, selectRouterUrl
} from './router-state.selectors';

describe('RouterState selectors', () => {
  it('should return Url', () => {
    expect(selectRouterUrl.projector(routerMockState)).toBe(routerMockState.state.url);
  });

  it('should return Params', () => {
    expect(selectRouterParams.projector(routerMockState)).toBe(routerMockState.state.params);
  });

  it('should return QueryParams', () => {
    expect(selectRouterQueryParams.projector(routerMockState)).toBe(routerMockState.state.queryParams);
  });

  it('should return Data Title', () => {
    expect(selectRouterDataTitle.projector(routerMockState)).toBe(routerMockState.state.title);
  });
});
