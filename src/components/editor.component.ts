import { IComponentController, IComponentOptions } from 'angular';

import { addStoryline, removeStorylines } from '../state/actions/storylines.action';
import { State, store } from '../state/store';
import { Storyline } from '../state/models/storylines.model';

export class EditorComponent implements IComponentOptions {
  public controller: any = EditorComponentController;
  public controllerAs: string = 'editor';
  public template: string = `
    <button ng-click="editor.addStoryline()">Add Storyline</button>
    <button ng-click="editor.removeStorylines()">Remove Storylines</button>
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

  constructor() {
    store.subscribe(() => {
      const { storylines } = store.getState() as State;

      this.storylines = storylines;
    });
  }

  public addStoryline(): void {
    store.dispatch(addStoryline());
  }

  public removeStorylines(): void {
    store.dispatch(removeStorylines());
  }
}
