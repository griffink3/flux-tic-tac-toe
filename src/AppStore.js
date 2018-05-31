// This is the game store

'use strict';

import type {Action} from './AppActions';

import {ReduceStore} from 'flux/utils';
import AppDispatcher from './AppDispatcher';

class AppStore extends ReduceStore<Action, string> {

  constructor() {
    super(AppDispatcher);
  }

  getInitialState(): state {
    return {
      history: [
        {
          squares: Array(9).fill(null)
        }
      ],
      stepNumber: 0,
      xIsNext: true
    };
  }

  reduce(state: string, action: Action): state {
    switch (action.type) {
      case 'clickSquare':
        const history = state.history.slice(0, state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[action.index]) {
          return;
        }
        squares[action.index] = state.xIsNext ? "X" : "O";
        return {
          history: state.history.concat([
            {
              squares: squares
            }
          ]),
          stepNumber: state.history.length,
          xIsNext: !state.xIsNext
        };
      case 'clickButton':
        return {
          history: state.history,
          stepNumber: action.step,
          xIsNext: (action.step % 2) === 0
        };
        // handle clicking one of the buttons
      default:
        return state;
    }
  }

}

function calculateWinner(squares): string {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default new AppStore();
