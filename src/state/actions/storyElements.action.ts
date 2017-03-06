import { Action } from 'redux';

export interface AddStoryElementAction extends Action {
  type: 'ADD_STORYELEMENT';
  storylineId: number;
}

export function addStoryElement(storylineId: number): AddStoryElementAction {
  return {
    type: 'ADD_STORYELEMENT',
    storylineId
  };
}

export type StoryElementAction = AddStoryElementAction;
