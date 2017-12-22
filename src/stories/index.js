import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import Logo from "../components/logo/logo";
import Nav from "../components/navbar/navbar";
import Header from "../components/header/header"
import { BrowserRouter } from 'react-router-dom';


storiesOf("Header", module)
.addDecorator(story=>(<BrowserRouter initialEntries={['/']}>{story()}</BrowserRouter>))
.add("Logo", ()=> <Logo />)
.add("Navbar", ()=><Nav/>)
.add("complete", ()=><Header/>)