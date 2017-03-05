import { combineReducers, createStore } from 'redux';
import { storylines } from './reducers/storylines.reducer';
import { Storyline } from './models/storylines.model';

export interface State {
  storylines: Storyline[];
}

const reducers = combineReducers({
  storylines
});

const initialState: State = {
  storylines: []
};

export const store = createStore(reducers, initialState);
