import { IComponentController, IComponentOptions } from 'angular';

import { addStoryline, removeStorylines } from '../state/actions/storylines.action';
import { State, store } from '../state/store';
import { StateMonitor } from '../state/models/stateMonitor.model';
import { Storyline } from '../state/models/storylines.model';
import { showStateMonitor, hideStateMonitor } from '../state/actions/stateMonitor.actions';

export class EditorComponent implements IComponentOptions {
  public controller: any = EditorComponentController;
  public controllerAs: string = 'editor';
  public template: string = `
    <button ng-click="editor.addStoryline()">Add Storyline</button>
    <button ng-click="editor.removeStorylines()">Remove Storylines</button>
    <button ng-hide="editor.stateMonitor.shown" 
            ng-click="editor.showStateMonitor()">Show State Monitor</button>
    <button ng-show="editor.stateMonitor.shown" 
            ng-click="editor.hideStateMonitor()">Hide State Monitor</button>
    <div class="storylines">
      <storyline 
        ng-repeat="storyline in editor.storylines"
        storyline="storyline">
      </storyline>
    </div>
  `;
}

class EditorComponentController implements IComponentController {
  public storylines: Storyline[];
  public stateMonitor: StateMonitor;

  constructor() {
    const render = () => {
      const { stateMonitor } = store.getState() as State;
      const { storylines } = store.getState() as State;

      this.stateMonitor = stateMonitor;
      this.storylines = storylines;
    };

    store.subscribe(render);

    render();
  }

  public addStoryline(): void {
    store.dispatch(addStoryline());
  }

  public removeStorylines(): void {
    store.dispatch(removeStorylines());
  }

  public hideStateMonitor(): void {
    store.dispatch(hideStateMonitor());
  }

  public showStateMonitor(): void {
    store.dispatch(showStateMonitor());
  }
}
