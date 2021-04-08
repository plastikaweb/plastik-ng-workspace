import { RouterState } from '../state/router/router-state.reducer';

export const routerMockState: {
  navigationId: number;
  state: RouterState;
} = {
  navigationId: 1,
  state: {
    params: { key: '1' },
    title: 'The title',
    queryParams: {
      term: 'smells',
    },
    url: 'path1/sub_path1',
  },
};
