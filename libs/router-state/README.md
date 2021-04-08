# router-state

This library was generated with [Nx](https://nx.dev).

## Description

This library compiles common router state management using @ngrx/router.

The router is inserted in the store as a `router` segment, so any action that involves getting router URL, params, query params and any action that involves a route change must use this router store.

- Common actions (navigate, back, forward).
- Serialized state ({url, params, queryParams, title}).
- Update page title dynamically.
- Automatic scroll to top on router navigation.
- Internal unit testing.

## What happens when router state isn’t part of your central store

### Code Duplication

Letting components to extract path/query params from navigation/router-state and then use it to select respective state slices and/or dispatch actions we end up with:

- lot of code duplication between sibling components.
- unnecessary coupling between parent and children components where a child component may need a router param extracted by parent component alongside its own.

### Inconsistency

Users may navigate to a nested route directly, for example by clicking on a shared link, bookmark or even typing in route in the browser's navigation bar.  
We need route params to establish/select the state for target component trees mounted in one or more the `<route-outlets/>` before anything meaningful can render.

### Unmaintainable

We can’t replay or jump across state snapshots using the redux dev tools as route changes if weren’t reduced by NgRx, can’t be jumped-to or re-played.

## Router State Object

```typescript
interface RouterStateUrl {
  url: any;
  params: Params;
  queryParams: Params;
  title: string;
}
```

## How to use

Changes to your imports on your app root module (app.module).

- Set `routerReducers` const into the StoreModule by object spread.
- Add StoreRouterConnectingModule with the custom serializer provided by the library ( `CustomRouterSerializer` ).
- Import `RouterStateEffects` to EffectsModule.forRoot.

```typescript
import {
    CustomRouterSerializer, routerReducers, RouterStateEffects
} from '@plastik-ng-workspace/router-state';

StoreModule.forRoot(
      { reducers,...routerReducers },
      // ... other configuration parameters
    ),
    StoreRouterConnectingModule.forRoot({
      serializer: CustomRouterSerializer,
    }),
    EffectsModule.forRoot([RouterStateEffects]),
```

Every time a route change is dispatched, the local state will be updated.

### RouterState Actions

```typescript
// navigate to a given URL. Any segment must be part of the path param array

this.store.dispatch(new Go({ path: ['section'], params: {id: 1}, queryParams: {name: 'test'} }));

// navigate back

this.store.dispatch(new Back();

// navigate forward

this.store.dispatch(new Forward();

```

> On component templates, **always use routerLink directive** over a class store router `Go` action dispatch.
>
> Example: `<a [routerLink]="['new']">Add new user</a>`

### Router Title and Navigation

For a specific title on any route, set a data object.

```typescript
{
  path: 'some-route',
  loadChildren: () => import('./containers/some/some.module').then(m => m.SomeModule),
  data: { title: 'Some Title' },
},
```

### Selectors

You can listen to these selectors to use the router state parameters within your application:

- selectRouterUrl
- selectRouterParams
- selectRouterQueryParams
- selectRouterDataTitle

## Running unit tests

Run `nx test router-state` to execute the unit tests.

## Links

- [@ngrx/router-store](https://v7.ngrx.io/guide/router-store/)
- [NgRx Router Store | Reduce & Select Route Params](https://medium.com/simars/ngrx-router-store-reduce-select-route-params-6baff607dd9)
