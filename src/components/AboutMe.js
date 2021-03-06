import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import headShot from "../images/mypicture.jpeg";

class AboutMe extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={12}>
            <h2>Brian Prickril</h2>
            <img src={headShot} alt="avatar" style={{ height: "300px", borderRadius: "10px" }} />

            <p style={{margin: "auto", paddingTop: "1em" }}>
              Brian is currently a full-stack development student who will be
              receiving his certification from The University of Pennyslvania in
              May 2020. During this coding bootcamp, Brian will have gained
              working knowledge of JavaScript and other modern web technologies--including, but not limited to: HTML/CSS, Node, React, Express,
              MongoDB, and MySQL.{" "}
            </p>

            <p style={{margin: "auto", paddingTop: "1em" }}>
              Brian is also particularly interested in opportunities in the
              fintech industry. He believes that we are entering a new paradigm in payment solutions
              and is interested in exploring those technologies upon completion
              of his bootcamp. In his free time, Brian enjoys exploring the
              outdoors, playing video games, all things music-related, and
              eating new foods with friends.
            </p>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default AboutMe;
