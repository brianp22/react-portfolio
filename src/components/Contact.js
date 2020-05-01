import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import headShot from "../images/mypicture.jpeg";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Brian Prickril</h2>
            <img src={headShot} alt="avatar" style={{ height: "300px", borderRadius: "10px" }} />

            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              I am currently pursuing entry-level opportunities in the tech
              industry. Please do not hesitate to contact me if you think I am a
              fit for your team.
            </p>
          </Cell>

          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />

            <div className="contact-list" style={{textAlign: 'center'}}>
              {/* Cell Phone Number */}
              <ul>
                <li style={{ fontSize: "30px", fontFamily: "Anton" }}>
                    <a href="tel:1-609-923-2399">609-923-2399</a>
                </li>

                {/* Email Adress */}
                <li style={{ fontSize: "30px", fontFamily: "Anton" }}>
                  ><a href={"mailto:bprickril22@gmail.com"}>Email me!</a>
                </li>
              </ul>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
