import { IComponentController, IComponentOptions } from 'angular';

import { State, store } from '../state/store';

export class StateComponent implements IComponentOptions {
  public controller: any = StateComponentController;
  public controllerAs: string = 'state';
  public template: string = `
    <pre>{{state.state | json}}</pre>
  `;
}

class StateComponentController implements IComponentController {
  public state: State;

  constructor() {
    const render = () => this.state = store.getState() as State;

    store.subscribe(render);

    render();
  }
}
