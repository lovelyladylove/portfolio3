import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';


class App extends Component {
 render() {
  return (
   <div className="demo-big-content">
	<Layout>
	 <Header
	  className="header-color"
	  title={<Link style={{ textDecoration: 'none', color: 'white' }} to="/">Lovelyladylove</Link>} scroll>
	    <Navigation>
		 <Link to="/resume">Resume</Link>
		 <Link to="/aboutme">About Me</Link>
		 <Link to="/projects">Projects</Link>
		 <Link to="/contact">Contacts</Link>
		</Navigation>
	</Header>
	 <Drawer title={ <Link style={{ textDecoration: 'none', color: 'black' }} to="/">Lovelyladylove</Link>}>
		<Navigation>
		 <Link to="/resume">Resume</Link>
		 <Link to="/aboutme">About Me</Link>
		 <Link to="/projects">Projects</Link>
		 <Link to="/contact">Contact</Link>
		 <Link to="/page1">Page1</Link>
		 <Link to="/page2">Page2</Link>
		 <Link to="/page3">Page3</Link>
		 <Link to="/page4">Page4</Link>
		</Navigation>
	 </Drawer>
		<Content>
		 <div className="page-content" />
		 <Main />
		</Content>
	</Layout>
   </div>
  );
 }
}

export default App;
