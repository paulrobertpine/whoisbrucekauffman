import React from "react";
import PropTypes from "prop-types";

// third-party components
import YouTube from "react-youtube";
import Slider from "react-slick";

// custom components
import Still from "./Still";

// about
import wibkBlack from "../images/WIBK_Full_White.svg";

// stills
import bruce from "../images/stills/bruce.png";
import bruceWaterfront from "../images/stills/bruce-waterfront-still.jpg";
import heroux from "../images/stills/heroux.jpg";
import teaser from "../images/stills/teaser.png";
import stiltwalker from "../images/stills/stiltwalker.png";
import alyssa from "../images/stills/alyssa.jpg";

//partners
import KCCF from "../images/partners/KCFF_logo-white.png";
import KWF from "../images/partners/KWF.png";
import SPAF from "../images/partners/SPAF_logo.png";
import City from "../images/partners/city-of-kingston-logo.jpg";
import KAC from "../images/partners/KAC-Identity-Centered-BW.jpg";

//news 
import wibkPoster from "../images/wibk_poster.pdf";
import KCCFLaurel from "../images/partners/2019_KCFF_Laurel.svg";


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
      arrows: true,
      autoplay: true,
      centerMode: true,
      className: "center",
      infinite: true,
      pauseOnHover: true,
      slidesToShow: 1,
      speed: 2000
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
            Who Is Bruce Kauffman? is an anthology film that explores and
            celebrates Kingston, Ontario’s vibrant poetic community through the
            eyes of a poet impresario who manages to be both ubiquitous and
            elusive. Kauffman’s influence is broad and longstanding – if one
            proceeds from any given place on an imagined map of Kingston’s
            poetry scene, then Bruce will show up somewhere along the trail,
            humbly and unassumingly encouraging all local writers.
          </p>

          <p>
            This film follows a day in the life of Bruce Kauffman, from his
            long-standing radio show on CFRC 101.9 FM, the Queen’s Campus
            Community Radio Station, to his “…and the journey continues” open
            mic, the longest running open mic series in Kingston, to his work as
            editor and mentor to countless young poets, to his passionate
            involvement in poetry readings, workshops, published anthologies,
            book launches, and arts festivals all over the beautiful limestone
            city. It is a love letter to Bruce, the living legend of Canada’s
            most literary town, who has given so much of himself to his
            community.
          </p>

          <p>
            In the film, the city’s most accomplished film makers collaborate
            with some of Kingston’s finest poets to interpret their poems in
            short cinematic vignettes, calling on the artistry of the local
            community to bring their vision to life. Stilt-walkers, swimmers,
            dancers, musicians and actors all come together to offer audiences a
            unique doorway into the vibrant, underground world that is
            Kingston’s literary scene.
          </p>

          <p>
            They join Kauffman in giving us a snapshot of the city and its
            poetry.
          </p>

          <h3>FEATURING KINGSTON POETS</h3>

          <ul>
            <li>Alyssa Cooper</li>
            <li>Armand Garnet Ruffo</li>
            <li>Fernando Monte</li>
            <li>Helen Humphreys</li>
            <li>Jason Heroux </li>
            <li>Sadiqa de Meijer</li>
            <li>Sarah Yi-Mei Tsiang</li>
            <li>Steven Heighton</li>
            <li>Wanda Praamsma</li>
          </ul>

          <h3>FEATURING KINGSTON FILM MAKERS </h3>

          <ul>
            <li>Clarke Mackey</li>
            <li>Craig Berggold</li>
            <li>Don Maynard</li>
            <li>Elisa Paloschi</li>
            <li>Fernando Monte</li>
            <li>James Greatrex</li>
            <li>Josh Lyon</li>
            <li>Julia Krolik & Owen Fernley</li>
            <li>Leigh Ann Bellamy</li>
            <li>Max Montalvo</li>
            <li>Nuno Ramalho</li>
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
            <Still image={teaser} alt="teaser" />
            <Still image={bruce} alt="bruce" />
            <Still image={stiltwalker} alt="stiltwalker" />
            <Still image={bruceWaterfront} alt="bruceWaterfront" />
            <Still image={heroux} alt="heroux" />
            <Still image={alyssa} alt="alyssa" />
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
          <Still image={City} alt="City" />
          <Still image={KAC} alt="KAC" />
        </article>

        <article
          id="news"
          className={`${this.props.article === "news" ? "active" : ""} ${
            this.props.articleTimeout ? "timeout" : ""
          }`}
          style={{ display: "none" }}
        >
          {close}
          <h2 className="major">News</h2>
          <p><a href={wibkPoster}>Download the poster</a></p>
          <ul>
            <li>World Premiere at the 2019 <a href="kingcanfilmfest.com<">Kingston Canadian Film Festival</a><br/> 9pm Friday March 1st at The Isabel Bader Centre for the Performing Arts</li>
          </ul>
          <img src={KCCFLaurel} alt="laurels" />
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
