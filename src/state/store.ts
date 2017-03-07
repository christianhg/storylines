import { combineReducers, createStore } from 'redux';
import { stateMonitor } from './reducers/stateMonitor.reducer';
import { StateMonitor } from './models/stateMonitor.model';
import { storylines } from './reducers/storylines.reducer';
import { Storyline } from './models/storylines.model';

export interface State {
  stateMonitor: StateMonitor;
  storylines: Storyline[];
}

const reducers = combineReducers({
  stateMonitor,
  storylines
});

const initialState: State = {
  stateMonitor: {
    shown: true
  },
  storylines: []
};

export const store = createStore(reducers, initialState);
