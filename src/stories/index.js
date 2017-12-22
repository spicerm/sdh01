import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import { Button, Welcome } from '@storybook/react/demo';
import Logo from "../components/logo/logo";
import Nav from "../components/navbar/navbar";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import { BrowserRouter } from 'react-router-dom';

const headerStories = storiesOf("Header", module);
const footerStories = storiesOf("Footer", module);

headerStories.addDecorator(withKnobs);
headerStories.addDecorator(story=>(<BrowserRouter initialEntries={['/']}>{story()}</BrowserRouter>));

footerStories.addDecorator(withKnobs);
footerStories.addDecorator(story=>(<BrowserRouter initialEntries={['/']}>{story()}</BrowserRouter>));

headerStories
.add("Logo", ()=> <Logo />)
.add("Navbar", ()=><Nav/>)
.add("complete", ()=><Header/>);

footerStories
.addWithInfo("Footer", "Static Footer", ()=>{
  return <Footer/>
})