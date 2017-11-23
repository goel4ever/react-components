import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Header from '../src/header/Header';
import Footer from '../src/footer/Footer';
import Signature from '../src/signature/Signature';
import Image from '../src/image'

storiesOf('Header', module)
  .add('Base', () => <Header />);
  // .add('with some emoji', () => <Header />);

storiesOf('Footer', module)
  .add('Base', () => <Footer />);

storiesOf('Signature', module)
  .add('Base', () => <Signature />);

storiesOf('Image', module)
  .add('Base', () => <Image src='/78dfd6fbd480387a0610b587cbfcd0ad.jpg' />)
  .add('Grayscale', () => <Image src='/78dfd6fbd480387a0610b587cbfcd0ad.jpg' grayscale="true" />)
  .add('Blur', () => <Image src='/78dfd6fbd480387a0610b587cbfcd0ad.jpg' blur="true" />);
  // TODO: See if we could do a combination of properties
  // .add('Grayscale and Blur', () => <Image src="/78dfd6fbd480387a0610b587cbfcd0ad.jpg" grayscale="true" blur="true" />);
