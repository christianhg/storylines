import { Action } from 'redux';

export interface AddStorylineAction extends Action {
  type: 'ADD_STORYLINE';
}

export function addStoryline(): AddStorylineAction {
  return {
    type: 'ADD_STORYLINE'
  };
}

export interface RemoveStorylineAction extends Action {
  readonly id: number;
  type: 'REMOVE_STORYLINE';
}

export function removeStoryline(id: number): RemoveStorylineAction {
  return {
    id,
    type: 'REMOVE_STORYLINE'
  };
}

export interface RemoveStorylinesAction extends Action {
  type: 'REMOVE_STORYLINES';
}

export function removeStorylines(): RemoveStorylinesAction {
  return {
    type: 'REMOVE_STORYLINES'
  };
}

export interface AddStoryElementToStorylineAction extends Action {
  type: 'ADD_STORY_ELEMENT_TO_STORYLINE';
  storylineId: number;
}

export function addStoryElementToStoryline(storylineId: number): AddStoryElementToStorylineAction {
  return {
    type: 'ADD_STORY_ELEMENT_TO_STORYLINE',
    storylineId
  };
}

export type StorylineAction = AddStorylineAction
    | RemoveStorylineAction
    | RemoveStorylinesAction
    | AddStoryElementToStorylineAction;
