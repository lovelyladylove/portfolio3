import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './landingpage';
import AboutMe from './aboutme';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';
import Page1 from './page1';
import Page2 from './page2';
import Page3 from './page3';




const Main = () => (
 <Switch>
  <Route exact path = "/" component = {LandingPage} />
  <Route path = "/aboutme" component = {AboutMe} />
  <Route path = "/contact" component = {Contact} />
  <Route path = "/projects" component = {Projects} />
  <Route path = "/resume" component = {Resume} />
  <Route path = "/page1" component = {Page1} />
  <Route path = "/page2" component = {Page2} />
  <Route path = "/page3" component = {Page3} />
 </Switch>
)

export default Main;