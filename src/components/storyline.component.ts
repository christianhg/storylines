import { IComponentController, IComponentOptions } from 'angular';

import { removeStoryline } from '../state/actions/storylines.action';
import { store } from '../state/store';
import { Storyline } from '../state/models/storylines.model';

export class StorylineComponent implements IComponentOptions {
  public bindings: any = {
    storyline: '<'
  };
  public controller: any = StorylineComponentController;
  public controllerAs: string = 'storyline';
  public template: string = `
    Storyline: {{storyline.storyline.id}}
    <button ng-click="storyline.remove()">x</button>
  `;
}

class StorylineComponentController implements IComponentController {
  public storyline: Storyline;

  public remove(): void {
    store.dispatch(removeStoryline(this.storyline.id));
  }
}
