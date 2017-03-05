import { module } from 'angular';

import { EditorComponent } from './components/editor.component';
import { StorylineComponent } from './components/storyline.component';
import { StateComponent } from './components/state.component';

import './storylines.scss';

module('storylines', [])
    .component('editor', new EditorComponent())
    .component('state', new StateComponent())
    .component('storyline', new StorylineComponent());
