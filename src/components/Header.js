import React from 'react'
import PropTypes from 'prop-types'
import logo from "../images/WIBK_Question_Mark_White_trans.svg";

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <img src={logo} alt="site logo"/>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Who Is Bruce Kauffman?</h1>
        <p>
        An anthology film that explores and celebrates Kingston, Ontario’s vibrant poetic community through the eyes of a poet impresario who manages to be both ubiquitous and elusive.
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('trailer')
            }}
          >
            Trailer
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('stills')
            }}
          >
            Stills
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('partners')
            }}
          >
            Partners
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
