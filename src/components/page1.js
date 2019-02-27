import React, { Component } from 'react';
import {Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Page1 extends Component {
 render() {
  return(
    <div className="contact-body">
    <Grid className="contact-grid">
     <Cell col={6}> 
     </Cell>
     <Cell col={6}>
   <div>
    <h2>Let's get connected!</h2>
    <hr />
    <div className="contact-list">
     <List>
      <ListItem>
        <ListItemContent style={{fontSize: '25px', fontfamily: 'Anton'}}>
        <a target="/" href="https://codepen.io"><i class="fab fa-codepen" /></a>
        </ListItemContent>
        </ListItem>
        <ListItem>
        <ListItemContent style={{fontSize: '25px', fontfamily: 'Anton'}}>
        <a target="/" href="https://github.com"><i class="fab fa-github"></i></a>
    
        </ListItemContent>
      </ListItem>
      <ListItem>
        <ListItemContent style={{fontSize: '25px', fontfamily: 'Anton'}}>
        <a target="/" href="https://twitter.com"><i class="fab fa-twitter"></i></a>
        </ListItemContent>
        </ListItem>
        <ListItem>
        <ListItemContent style={{fontSize: '25px', fontfamily: 'Anton'}}>
        <a target="/" href="https://dev.to"><i class="fab fa-dev"></i></a>
        </ListItemContent>
        </ListItem>
        <ListItem>
        <ListItemContent style={{fontSize: '25px', fontfamily: 'Anton'}}>
        <a target="/" href="https://stackoverflow.com/story/"><i class="fab fa-stack-overflow"></i></a>
        </ListItemContent>
        </ListItem>
        <ListItem>
        <ListItemContent style={{fontSize: '25px', fontfamily: 'Anton'}}>
        <a target="/" href="https://www.linkedin.com/n"><i class="fab fa-linkedin"></i></a>
        </ListItemContent>
        </ListItem>
        <ListItem>
        <ListItemContent style={{fontSize: '25px', fontfamily: 'Anton'}}>
        <a target="/" href="https://medium.com/"><i class="fab fa-medium"></i></a>
        </ListItemContent>
        </ListItem>
        <ListItem>
        <ListItemContent style={{fontSize: '25px', fontfamily: 'Anton'}}>
        <a target="/" href="https://www.freecodecamp.org"><i class="fab fa-free-code-camp"></i></a>
        </ListItemContent>
        </ListItem>
        <ListItem>
        <ListItemContent style={{fontSize: '25px', fontfamily: 'Anton'}}>
        <a target="/" href="https://www.behance.net"><i class="fab fa-behance"></i></a>
        </ListItemContent>
        </ListItem>
      </List>
     </div>
     </div>
     </Cell>
    </Grid>
   </div>

  )
 }
}

export default Page1;