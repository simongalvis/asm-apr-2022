import { Action, createReducer, on } from '@ngrx/store';
import * as actions from '../actions/light.actions';

export type lightColors = 'green' | 'red' | 'yellow';
export interface LightState {
color: 'green' | 'red' | 'yellow';
}



const initialState: LightState = {
color: 'green',
};



export const reducer = createReducer(initialState, on(actions.lightCycled, changeTheColor));

function changeTheColor(currentState: LightState, action: Action): LightState {
  switch (currentState.color) {
  case 'red':
  return { color: 'green' };
  case 'green':
  return { color: 'yellow' };
  case 'yellow':
  return { color: 'red' };
  default:
  return currentState;
  }
  }
