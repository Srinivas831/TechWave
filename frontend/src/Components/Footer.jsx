import React from "react";
import "../Css/utils.css";
import Styled from "styled-components";
import logo from "../Assets/logo_png.png";
import { Link } from "react-router-dom";
import {
  faFacebook,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <DIV>
      <div className="footer-parent">
        <div className="footer-part1">
          <div className="logo-div">
            {/* <img src={logo} alt="" /> */}
            <h1>TechWave</h1>
          </div>
          {/* <div>
            <p>
              3/2 Bangaluru <br /> Courses from us
            </p>
          </div> */}
          <div className="social-media-icons">
            <FontAwesomeIcon icon={faFacebook} style={{ fontSize: "1.5rem" }} />
            <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: "1.5rem" }} />
            <FontAwesomeIcon icon={faTwitter} style={{ fontSize: "1.5rem" }} />
          </div>
        </div>

        <div className="footer-part2">
          <div className="part2-heading">
            <h3>Explore</h3>
          </div>
          <div className="part2-links">
            <Link to="#">Gallery</Link>
            <Link to="#">News & Articles</Link>
            <Link to="#">FAQ'S</Link>
            <Link to="#">Coming Soon</Link>
            <Link to="#">Contacts</Link>
          </div>
        </div>
        <div className="footer-part3">
          <div className="part3-heading">
            <h3>Links</h3>
          </div>
          <div className="part3-links">
            <Link to="/about">About</Link>
            <Link to="/course">Course</Link>
            <Link to="#">Instructor</Link>
            <Link to="#">Events</Link>
          </div>
        </div>

        <div className="footer-part4">
          <div className="part4-heading">
            <h3>Contact Us</h3>
          </div>
          <div className="part4-links">
            <div>
              <FontAwesomeIcon
                icon={faLocationDot}
                style={{ fontSize: "20px" }}
              />
              <p>
                Bangalore 74 ave,sute <br />
                Karnataka, 500055
              </p>
            </div>
            <div>
              <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: "20px" }} />
              <p>support@techwave.com</p>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faPhoneVolume}
                style={{ fontSize: "20px" }}
              />
              <p>+91 99005 50099</p>
            </div>
          </div>
        </div>
      </div>
    </DIV>
  );
}

export default Footer;

const DIV = Styled.div`
    background-color : var(--dark-color);
    font-family : var(--primary-font-family);
    position : relative;
    width : 100%;
    left : 0;
    bottom: 0;
    .footer-parent{
        width : 90%;
        display : grid;
        margin : auto;
        grid-template-columns : repeat(4,1fr);
    }
    .footer-part1{
        display : flex;
        flex-direction : column;
        justify-content : space-evenly;
        color : var(--secondary-color);
        /* align-items : center; */
        gap: 1rem;
        padding : 1rem 0;
    }
    .logo-div{
        width : 50%
    }
    .logo-div img{
        width : 100%
    }
    .footer-part1 div p{
        font-size : 12px;
    }
    .social-media-icons{
        display : flex;
        gap: 1rem;
    }

    .footer-part2 ,.footer-part3, .footer-part4{
        display : flex;
        flex-direction : column;
        /* justify-content : space-between; */
        color : var(--secondary-color);
        /* align-items : center; */
        gap: 1.5rem;
        padding : 1rem 0;
    }
    .part2-links , .part3-links, .part4-links{
        display : flex;
        flex-direction : column;
        gap : 1rem;
    }
    .part2-links a ,.part3-links a{
        display : inline;
        color : var(--secondary-color);
        text-decoration : none;
        position : relative;
        /* border : 1px solid red; */
    }
    .part2-links a:before ,.part3-links a:before{
        content : "";
        position : absolute;
        bottom : -2px;
        height : 3px;
        width : 0;  
        background: var(--primary-color);
        border-radius : 50px;
        transition : all 0.5s ease;
    }
    .part2-links a:hover:before {
       width: 45%;
    }
    .part3-links a:hover:before{
      width : 30%;
    }
    .part4-links div{
      display: flex;
      align-items : center;
    }
    .part4-links div p {
      margin : 0 1rem;
    }


    /* -------- media quary ------ */


    @media (max-width:780px) {
      .footer-parent{
        grid-template-columns : repeat(2,1fr);
    }
    }

    @media (max-width:480px) {
      .footer-parent{
        grid-template-columns : repeat(1,1fr);
    }
    }
`;
