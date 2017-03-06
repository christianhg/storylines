import { Action } from 'redux';

export interface ShowStateMonitorAction extends Action {
  type: 'SHOW_STATE_MONITOR';
}

export function showStateMonitor(): ShowStateMonitorAction {
  return {
    type: 'SHOW_STATE_MONITOR'
  };
}

export interface HideStateMonitorAction extends Action {
  type: 'HIDE_STATE_MONITOR';
}

export function hideStateMonitor(): HideStateMonitorAction {
  return {
    type: 'HIDE_STATE_MONITOR'
  };
}

export type StateMonitorAction = ShowStateMonitorAction | HideStateMonitorAction;
