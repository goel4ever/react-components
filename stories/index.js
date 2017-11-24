import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withInfo, setDefaults } from '@storybook/addon-info';


import Header from '../src/header';
import Footer from '../src/footer';
import Signature from '../src/signature';
import Image from '../src/image';
import Button from '../src/button';

setDefaults({
  header: false,  // Toggles display of header with component name and description
  inline: true,   // Displays info inline vs click button to view
});

storiesOf('Header')
  .addDecorator((story, context) => withInfo('')(story)(context))
  .add('Base', () => <Header />);

storiesOf('Footer', module)
  .addDecorator((story, context) => withInfo('')(story)(context))
  .add('Base', () => <Footer />);

storiesOf('Signature', module)
  .addDecorator((story, context) => withInfo('')(story)(context))
  .add('Base', () => <Signature />);

storiesOf('Image', module)
  .addDecorator((story, context) => withInfo('')(story)(context))
  .add('Base', () => <Image src='/78dfd6fbd480387a0610b587cbfcd0ad.jpg' />)
  .add('Grayscale', () => <Image src='/78dfd6fbd480387a0610b587cbfcd0ad.jpg' grayscale="true" />)
  .add('Blur', () => <Image src='/78dfd6fbd480387a0610b587cbfcd0ad.jpg' blur="true" />);
  // TODO: See if we could do a combination of properties
  // .add('Grayscale and Blur', () => <Image src="/78dfd6fbd480387a0610b587cbfcd0ad.jpg" grayscale="true" blur="true" />);

storiesOf('Button', module)
  .addDecorator((story, context) => withInfo('')(story)(context))
  .add('Base', () => <Button title="Continue" />)
  .add('Info', () => <Button title="Continue" type="info" />)
  .add('Warning', () => <Button title="Continue" type="warning" />)
  .add('Danger', () => <Button title="Continue" type="danger" />)
  .add('Success', () => <Button title="Continue" type="success" />)
  .add('Animate Arrow', () => <Button title="Continue" animation="arrow" />)
  .add('Animate Ripple', () => <Button title="Continue" animation="ripple" />);
