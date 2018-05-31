// This module wraps all the action helper methods

'use strict';

export type Action =
  {
    type: 'clickSquare',
    index: string,
  } | {
    type: 'clickButton',
    step: string,
  };
