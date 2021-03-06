import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withInfo, setDefaults } from '@storybook/addon-info';

import Header from '../src/header';
import Footer from '../src/footer';
import Signature from '../src/signature';
import { Avatar } from '../src/avatar';
import { Image } from '../src/image';
import { Button } from '../src/button';
import { Text } from '../src/input';
import { SocialMedia } from '../src/social-media';

import { Chart } from '../src/chart';

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

storiesOf('Avatar', module)
  .addDecorator((story, context) => withInfo('')(story)(context))
  .add('Base', () => <Avatar src='/images/78dfd6fbd480387a0610b587cbfcd0ad.jpg' />)
  .add('Grayscale', () => <Avatar src='/images/78dfd6fbd480387a0610b587cbfcd0ad.jpg' grayscale="true" />)
  .add('Blur', () => <Avatar src='/images/78dfd6fbd480387a0610b587cbfcd0ad.jpg' blur="true" />);

storiesOf('Image', module)
  .addDecorator((story, context) => withInfo('')(story)(context))
  .add('Base', () => <Image src='/images/axe-1748305_1920.jpg' />)
  .add('Grayscale', () => <Image src='/images/axe-1748305_1920.jpg' grayscale="true" />)
  .add('Blur', () => <Image src='/images/axe-1748305_1920.jpg' blur="true" />);
  // TODO: See if we could do a combination of properties
  // .add('Grayscale and Blur', () => <Image src="/78dfd6fbd480387a0610b587cbfcd0ad.jpg" grayscale="true" blur="true" />);

storiesOf('Button', module)
  .addDecorator((story, context) => withInfo('')(story)(context))
  .add('Base', () => <Button title="Continue" />)
  .add('Info', () => <Button title="Continue" type="info" />)
  .add('Warning', () => <Button title="Continue" type="warning" />)
  .add('Danger', () => <Button title="Continue" type="danger" />)
  .add('Success', () => <Button title="Continue" type="success" />)
  .add('Animate Arrow', () => <Button title="Continue" animation="arrow" />);

storiesOf('Text', module)
  .addDecorator((story, context) => withInfo('')(story)(context))
  .add('Base', () => <Text id="txtName" name="testName" placeholder="Enter value . . ." />);

storiesOf('Social Media', module)
  .addDecorator((story, context) => withInfo('')(story)(context))
  .add('Base', () => (
    <div>
      <SocialMedia type="GitHub" url="https://www.github.com/goel4ever" />
      <SocialMedia type="LinkedIn" url="https://www.linkedin.com/in/goel4ever/" />
      <SocialMedia type="Twitter" url="https://www.twitter.com/goel4ever" />
      <SocialMedia type="Facebook" url="https://www.facebook.com/goel4ever" />
    </div>
  ))
  .add('GitHub', () => <SocialMedia type="GitHub" />)
  .add('GitHub with Link', () => <SocialMedia type="GitHub" url="https://www.github.com/goel4ever" />)
  .add('LinkedIn with Link', () => <SocialMedia type="LinkedIn" url="https://www.linkedin.com/in/goel4ever/" />)
  .add('Twitter with Link', () => <SocialMedia type="Twitter" url="https://www.twitter.com/goel4ever" />)
  .add('Facebook with Link', () => <SocialMedia type="Facebook" url="https://www.facebook.com/goel4ever" />);

storiesOf('Chart', module)
  .addDecorator((story, context) => withInfo('')(story)(context))
  .add('Base', () => <Chart />);
