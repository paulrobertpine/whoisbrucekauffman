import React from "react";
import PropTypes from "prop-types";

import wibkPencil from "../images/WIBK_Pencil_White_trans.svg";

const Footer = props => (
  <footer id="footer" style={props.timeout ? { display: "none" } : {}}>
    <ul className="icons">
      <li>
        <a
          href="https://twitter.com/whoisbrucefilm"
          className="icon fa-twitter"
          rel="noopener noreferrer"
          target="_blank"
        >
          <span className="label">Twitter</span>
        </a>
      </li>
      <li>
        <a
          href="https://www.facebook.com/whoisbrucekauffmanfilm/"
          className="icon fa-facebook"
          rel="noopener noreferrer"
          target="_blank"
        >
          <span className="label">Facebook</span>
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/whoisbrucekauffman/"
          className="icon fa-instagram"
          rel="noopener noreferrer"
          target="_blank"
        >
          <span className="label">Instagram</span>
        </a>
      </li>
    </ul>
    <div className="colophon">
      <img src={wibkPencil} alt="colophon" />
    </div>
  </footer>
);

Footer.propTypes = {
  timeout: PropTypes.bool
};

export default Footer;
