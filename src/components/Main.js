import React from "react";
import PropTypes from "prop-types";

// third-party components
import YouTube from "react-youtube";
import Slider from "react-slick";

// custom components
import Still from "./Still";

// images
import wibkBlack from "../images/WIBK_Full_White.svg";
import bruce from "../images/stills/bruce.png";
import heroux from "../images/stills/heroux.jpg";
import krolik from "../images/stills/krolik.png";
import mackey from "../images/stills/mackey.png";
import maynard from "../images/stills/maynard.png";
import teaser from "../images/stills/teaser.png";
import KCCF from "../images/partners/KCFF_logo-white.png";
import KWF from "../images/partners/KWF.png";
import SPAF from "../images/partners/SPAF_logo.png";

const YouTubeOpts = {
  height: "370px",
  width: "100%",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 0
  }
};

class Main extends React.Component {
  render() {
    const settings = {
      arrows: false,
      autoplay: true,
      pauseOnHover: false,
      speed: 1000,
      className: "center",
      centerMode: true,
      vertical: true,
      infinite: true,
      slidesToShow: 2
    };

    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle();
        }}
      />
    );

    return (
      <div
        id="main"
        style={this.props.timeout ? { display: "flex" } : { display: "none" }}
      >
        <article
          id="about"
          className={`${this.props.article === "about" ? "active" : ""} ${
            this.props.articleTimeout ? "timeout" : ""
          }`}
          style={{ display: "none" }}
        >
          {close}
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={wibkBlack} alt="Who Is Bruce Kaufmann logo" />
          </span>
          <p>
            Who Is Bruce Kauman? is an anthology film that explores and
            celebrates Kingston, Ontario’s vibrant poetic community through the
            eyes of a poet impresario who manages to be both ubiquitous and
            elusive. Kauman’s influence is broad and longstanding – if one
            proceeds from any given place on an imagined map of Kingston’s
            poetry scene, then Bruce will show up somewhere along the trail,
            humbly and unassumingly encouraging all local writers. In this film,
            the city’s most accomplished film makers and other artists
            collaborate with some of Kingston’s finest poets to interpret their
            poems in short cinematic pieces. They join Kauman in giving us a
            snapshot of the city and its poetry.
          </p>

          <h3>FEATURING KINGSTON POETS</h3>

          <ul>
            <li>Steven Heighton</li>
            <li>Sarah Tsiang</li>
            <li>Fernando Monte</li>
            <li>Sadiqa de Meijer</li>
            <li>Alyssa Cooper</li>
            <li>Armand Ruo</li>
            <li>Helen Humphreys</li>
            <li>Jason Heroux </li>
          </ul>

          <h3>FEATURING KINGSTON FILM MAKERS </h3>

          <ul>
            <li>Elisa Paloschi</li>
            <li>Nuno Ramalho</li>
            <li>Julia Krolik</li>
            <li>Owen Fernley</li>
            <li>Clarke Mackey</li>
            <li>Armand Ruo</li>
            <li>Don Maynard</li>
            <li>Craig Berggold</li>
            <li>Max Montalvo</li>
            <li>Josh Lyon</li>
            <li>James Greatrex</li>
          </ul>
        </article>

        <article
          id="trailer"
          className={`${this.props.article === "trailer" ? "active" : ""} ${
            this.props.articleTimeout ? "timeout" : ""
          }`}
          style={{ display: "none" }}
        >
          {close}
          <h2 className="major">Trailer</h2>
          <YouTube videoId="My5deiCdLvE" opts={YouTubeOpts} />
        </article>

        <article
          id="stills"
          className={`${this.props.article === "stills" ? "active" : ""} ${
            this.props.articleTimeout ? "timeout" : ""
          }`}
          style={{ display: "none" }}
        >
          {close}

          <h2 className="major">Stills</h2>
          <p>click to open/download</p>
          <Slider {...settings}>
            <Still image={bruce} alt="bruce"/>
            <Still image={heroux} alt="heroux" />
            <Still image={krolik} alt="krolik" />
            <Still image={teaser} alt="teaser" />
            <Still image={mackey} alt="mackey" />
            <Still image={maynard} alt="maynard" />
          </Slider>
        </article>

        <article
          id="partners"
          className={`${this.props.article === "partners" ? "active" : ""} ${
            this.props.articleTimeout ? "timeout" : ""
          }`}
          style={{ display: "none" }}
        >
          {close}
          <h2 className="major">Partners</h2>

          <Still image={KCCF} alt="KCCF" />
          <Still image={KWF} alt="KWF" />
          <Still image={SPAF} alt="SPAF" />
        </article>

        <article
          id="contact"
          className={`${this.props.article === "contact" ? "active" : ""} ${
            this.props.articleTimeout ? "timeout" : ""
          }`}
          style={{ display: "none" }}
        >
          {close}
          <h2 className="major">Contact</h2>
          <p>Questions? Comments?</p>
          <p>
            <a href="mailto:media@skeletonparkarts.org">
              <span className="icon fa-envelope">
                {" "}
                media@skeletonparkarts.org
              </span>
            </a>
          </p>
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
        </article>
      </div>
    );
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool
};

export default Main;
