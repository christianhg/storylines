import { module } from 'angular';

import { EditorComponent } from './components/editor.component';
import { StorylineComponent } from './components/storyline.component';
import { StateMonitorComponent } from './components/stateMonitor.component';

import './storylines.scss';

module('storylines', [])
    .component('editor', new EditorComponent())
    .component('stateMonitor', new StateMonitorComponent())
    .component('storyline', new StorylineComponent());
