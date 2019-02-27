import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Associations extends Component {
  render() {
    return(
      <Grid>
        <Cell col={4}>
          <p>{this.props.start} - {this.props.end}</p>
        </Cell>
        <Cell col={8}>
          <h4 style={{marginTop:'0px'}}>{this.props.associationName}</h4>
          <p>{this.props.position}</p>
          <p>{this.props.address}</p>
        </Cell>
      </Grid>
    )
  }
}

export default Associations;