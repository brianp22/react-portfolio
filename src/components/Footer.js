import React from "react";
import { Link } from "react-router-dom";
import Resume from '../documents/resume.pdf'
import AWS from '../documents/aws_cert.pdf'


function Footer() {
    return (
            <div className="footer">
            <Link className="mr-4" style={{color: "white"}} to={Resume} target="_blank">Resume
            </Link>
            <Link className="mr-4" style={{color: "white"}} to="https://github.com/brianp22" target="_blank">GitHub
            </Link>
            <Link className="mr-4" style={{color: "white"}} to="https://www.linkedin.com/in/brianprickril/" target="_blank">LinkedIn
            </Link>
            <Link className="mr-4" style={{color: "white"}} to={AWS}target="_blank">AWS Cert
            </Link>
            <br/>
            © 2020
            </div>
    );
  }
  
  export default Footer;
  