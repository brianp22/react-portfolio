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
              <h2>Full-Stack JavaScript Developer</h2>
              <hr />
              <p>HTML/CSS | JavaScript | React | NodeJS | Express | MongoDB</p>

              <div className='social-links'>
                {/*/ LinkedIn */}
                <a
                  href='https://www.linkedin.com/in/brianprickril/'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <i className='fa fa-linkedin-square' aria-hidden='true' />
                </a>

                {/*/ Github */}
                <a
                  href='https://github.com/brianp22'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <i className='fa fa-github-square' aria-hidden='true' />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default LandingPage
