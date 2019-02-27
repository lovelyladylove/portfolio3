import React, { Component } from 'react';
import {Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import avatar from '../img/1.png';

class Contact extends Component {
 render() {
  return(
   <div className="contact-body">
    <Grid className="contact-grid">
     <Cell col={6}> 
      <h2>Lovelyladylove</h2>
      <img src={avatar} alt="avatar" style={{height: '400px', width: '450px'}} />
      <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}> Let's be connected! .............................................................................................................................</p>
     </Cell>
     <Cell col={6}>
      <h2>Let's get connected!</h2>
      <hr />
      <div className="contact-list">
      <List>
        <ListItem>
          <ListItemContent style={{fontSize: '25px', fontfamily: 'Anton'}}>
            <i className="fa fa-phone-square" aria-hidden="true" />
              +140000000000
          </ListItemContent>
        </ListItem>
        <ListItem>
          <ListItemContent style={{fontSize: '25px', fontfamily: 'Anton'}}>
            <i className="fa fa-envelope-square" aria-hidden="true" />
            lovewagemann@gmail.com
          </ListItemContent>
        </ListItem>
        <ListItem>
          <ListItemContent style={{fontSize: '30px', fontfamily: 'Anton'}}>
            <i className="fa fa-facebook-square" aria-hidden="true" />
              +140000000000
          </ListItemContent>
        </ListItem>
        <ListItem>
          <ListItemContent style={{fontSize: '30px', fontfamily: 'Anton'}}>
            <i className="fa fa-home" aria-hidden="true" />
             58332 Schwelm, Deuthland
          </ListItemContent>
        </ListItem>
       </List>
      </div>
     </Cell>
    </Grid>
   </div>
  )
 }
}

export default Contact;