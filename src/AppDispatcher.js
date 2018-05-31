// This is the dispatcher

'use strict';

import type {Action} from './AppActions';

import {Dispatcher} from 'flux';

const dispatcher: Dispatcher<Action> = new Dispatcher();

export default dispatcher;
