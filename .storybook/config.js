import { configure, setAddon } from '@storybook/react';
import infoAddon from '@storybook/addon-info';

setAddon(infoAddon);
function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
