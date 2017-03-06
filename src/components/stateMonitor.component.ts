import { IComponentController, IComponentOptions } from 'angular';

import { State, store } from '../state/store';

export class StateMonitorComponent implements IComponentOptions {
  public controller: any = StateMonitorComponentController;
  public controllerAs: string = 'state';
  public template: string = `
    <pre ng-show="state.state.stateMonitor.shown">{{state.state | json}}</pre>
  `;
}

class StateMonitorComponentController implements IComponentController {
  public state: State;

  constructor() {
    const render = () => this.state = store.getState() as State;

    store.subscribe(render);

    render();
  }
}
