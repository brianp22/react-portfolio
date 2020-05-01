import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'
import headShot from "../images/mypicture.jpeg";

class LandingPage extends Component {
  render () {
    return (
      <div style={{ width: '100%', height: '100%', margin: 'auto' }}>
        <Grid className='landing-grid'>
          <Cell col={12}>
            <div className='banner-text'>
              <h1>Brian Prickril</h1>
              <img
              src={headShot}
              alt='avatar'
              className='avatar-img'
            />
              <h2>JavaScript Developer</h2>
              <hr />
              <p>HTML/CSS | JavaScript | React | NodeJS | Express | MongoDB</p>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default LandingPage