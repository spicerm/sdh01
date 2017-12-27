import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import { Button, Welcome } from '@storybook/react/demo';
import { BrowserRouter } from 'react-router-dom';

const headerStories = storiesOf("Header", module);
const footerStories = storiesOf("Footer", module);

headerStories.addDecorator(withKnobs);
headerStories.addDecorator(story=>(<BrowserRouter initialEntries={['/']}>{story()}</BrowserRouter>));

footerStories.addDecorator(withKnobs);
footerStories.addDecorator(story=>(<BrowserRouter initialEntries={['/']}>{story()}</BrowserRouter>));

headerStories
.add("Header Signed Out", ()=><Header isSignedIn={false} onClick={action('Clicked')}/>)
.add("Header Signed In", ()=><Header isSignedIn={true} onClick={action('Clicked')}/>);

footerStories
.addWithInfo("Footer", "Static Footer", ()=>{
  return <Footer/>
})

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('click')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);