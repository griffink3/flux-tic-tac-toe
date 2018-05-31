// The container for the app

'use strict';

import AppDispatcher from './AppDispatcher';
import AppStore from './AppStore';
import AppView from './AppView';
import {Container} from 'flux/utils';

function getStores() {
  return [
    AppStore,
  ];
}

function getState() {
  return {
    value: AppStore.getState(),

    // $FlowExpectedError: Cannot dispatch an incorrectly formed action.
    onFooChange: () => AppDispatcher.dispatch({
      type: 'foo',
      bar: 'Hello Bar!',
    }),
  };
}

export default Container.createFunctional(AppView, getStores, getState);
