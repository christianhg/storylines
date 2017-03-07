import { module } from 'angular';

import { EditorComponent } from './components/editor.component';
import { StateMonitorComponent } from './components/stateMonitor.component';
import { StoryElementComponent} from './components/storyElement.component';
import { StorylineComponent } from './components/storyline.component';

import './storylines.scss';

module('storylines', [])
    .component('editor', new EditorComponent())
    .component('stateMonitor', new StateMonitorComponent())
    .component('storyElement', new StoryElementComponent())
    .component('storyline', new StorylineComponent());
