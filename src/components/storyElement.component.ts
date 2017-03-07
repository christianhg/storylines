import { IComponentController, IComponentOptions } from 'angular';

export class StoryElementComponent implements IComponentOptions {
  public bindings: any = {};
  public controller: any = StoryElementComponentController;
  public controllerAs: string = 'storyline';
  public template: string = `
    Story element
  `;
}

class StoryElementComponentController implements IComponentController {
}
