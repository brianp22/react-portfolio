import React from "react";
import { Button } from "react-mdl";
import Resume from '../documents/resume.pdf'


function Footer() {
    return (
            <div className="footer">
            <Button style={{color: "white"}} href={Resume} target="_blank">Resume
            </Button>
            <Button style={{color: "white"}} href="https://github.com/brianp22" target="_blank">GitHub
            </Button>
            <Button style={{color: "white"}} href="https://www.linkedin.com/in/brianprickril/" target="_blank">LinkedIn
            </Button>
            <br/>
            © 2020
            </div>
    );
  }
  
  export default Footer;
  