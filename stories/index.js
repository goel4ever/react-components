import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Header from '../src/header/Header';
import Footer from '../src/footer/Footer';
import Signature from '../src/signature/Signature';

storiesOf('Header', module)
  .add('Base', () => <Header />);
  // .add('with some emoji', () => <Header />);

storiesOf('Footer', module)
  .add('Base', () => <Footer />);

storiesOf('Signature', module)
  .add('Base', () => <Signature />);
