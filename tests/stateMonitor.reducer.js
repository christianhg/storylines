import test from 'ava';
import { stateMonitor } from '../src/state/reducers/stateMonitor.reducer';

test('should go from shown to hidden', t => {
  t.deepEqual(stateMonitor({ shown: true }, { type: 'HIDE_STATE_MONITOR' }), { shown: false });
  t.deepEqual(stateMonitor({ shown: false }, { type: 'HIDE_STATE_MONITOR' }), { shown: false });
});

test('should go from hidden to shown', t => {
  t.deepEqual(stateMonitor({ shown: false }, { type: 'SHOW_STATE_MONITOR' }), { shown: true });
  t.deepEqual(stateMonitor({ shown: true }, { type: 'SHOW_STATE_MONITOR' }), { shown: true });
});
