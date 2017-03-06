import { StorylineAction } from '../actions/storylines.action';
import { Storyline } from '../models/storylines.model';

export function storylines(storylines: Storyline[] = [], action: StorylineAction): Storyline[] {
  if (action.type === 'ADD_STORYLINE') {
    const id: number = storylines.length > 0
        ? storylines[storylines.length - 1].id + 1
        : 0;
    const elements: number[] = [];
    const storyline: Storyline = {
      id,
      elements
    };

    return [...storylines, storyline];
  }

  if (action.type === 'REMOVE_STORYLINE') {
    return [...storylines]
        .filter((storyline: Storyline) => storyline.id !== action.id);
  }

  if (action.type === 'REMOVE_STORYLINES') {
    return [];
  }

  if (action.type === 'ADD_STORY_ELEMENT_TO_STORYLINE') {
    return storylines.map((storyline: Storyline) => {
        if (storyline.id === action.storylineId) {
          storyline.elements.push(storyline.elements.length);
        }

        return storyline;
      });
  }

  return storylines;
}
