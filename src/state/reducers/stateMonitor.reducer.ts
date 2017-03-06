import { StateMonitor } from '../models/stateMonitor.model';
import { StateMonitorAction } from '../actions/stateMonitor.actions';

export function stateMonitor(state: StateMonitor = { shown: true }, action: StateMonitorAction): StateMonitor {
  if (action.type === 'HIDE_STATE_MONITOR') {
    return {
      shown: false
    };
  }

  if (action.type === 'SHOW_STATE_MONITOR') {
    return {
      shown: true
    };
  }

  return state;
}
