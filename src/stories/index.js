import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

storiesOf('Buttons', module)
  .add('AddProjectButton', () => (<div />)); 

storiesOf('Cards', module)
  .add('AudioCard', () => (<div />))
  .add('ClientInfo', () => (<div />))
  .add('CoverCard', () => (<div />))
  .add('EmptyCard', () => (<div />))
  .add('ImageCard', () => (<div />))
  .add('ProjectBasicInfo', () => (<div />))
  .add('TextCard', () => (<div />));


storiesOf('InputAtoms', module)
  .add('AudioCapture', () => (<div />))
  .add('ImagePicker', () => (<div />))
  .add('TextEdit', () => (<div />));

storiesOf('Filters', module)
  .add('SwitchFilter', () => (<div />))
  .add('CardTypePicker', () => (<div />));

storiesOf('Project', module)
  .add('ProjectItem', () => (<div />))
  .add('ProjectList', () => (<div />))
  .add('ProjectStructure', () => (<div />));

storiesOf('Auth', module)
  .add('Login', () => (<div />))
  .add('Signup', () => (<div />));

storiesOf('CardContainers', module)
  .add('CardCarousel', () => (<div />))
  .add('CardOverlay', () => (<div />));