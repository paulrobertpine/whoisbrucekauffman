import React from "react";
import PropTypes from "prop-types";

import wibkBlack from "../images/WIBK_Full_White.svg";
import pic01 from "../images/pic01.jpg";
import pic02 from "../images/pic02.jpg";
import pic03 from "../images/pic03.jpg";

class Main extends React.Component {
  render() {
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
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={wibkBlack} alt="" />
          </span>
          <p>Who Is Bruce Kauman? is an anthology film that explores and celebrates
          Kingston, Ontario’s vibrant poetic community through the eyes of a
          poet impresario who manages to be both ubiquitous and elusive.
          Kauman’s influence is broad and longstanding – if one proceeds from
          any given place on an imagined map of Kingston’s poetry scene, then
          Bruce will show up somewhere along the trail, humbly and unassumingly
          encouraging all local writers. In this film, the city’s most
          accomplished film makers and other artists collaborate with some of
          Kingston’s finest poets to interpret their poems in short cinematic
          pieces. They join Kauman in giving us a snapshot of the city and its
          poetry.</p>

          <h3>FEATURING KINGSTON POETS</h3>   
          
          <p>
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
          </p>
          
          <h3>FEATURING KINGSTON FILM MAKERS </h3> 
        
          <p>
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
          </p>

          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === "work" ? "active" : ""} ${
            this.props.articleTimeout ? "timeout" : ""
          }`}
          style={{ display: "none" }}
        >
          <h2 className="major">Work</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu,
            at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent
            urna nisi, fringila lorem et vehicula lacinia quam. Integer
            sollicitudin mauris nec lorem luctus ultrices.
          </p>
          <p>
            Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
            Pellentesque condimentum sem. In efficitur ligula tate urna.
            Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor.
            Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat
            tempus.
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === "contact" ? "active" : ""} ${
            this.props.articleTimeout ? "timeout" : ""
          }`}
          style={{ display: "none" }}
        >
          <h2 className="major">Contact</h2>
          <p>
            Questions? Comments?
          </p>
          <p>
            <a href="mailto:media@skeletonparkarts.org" >
              <h3 className="icon fa-envelope">media@skeletonparkarts.org</h3>
            </a></p>
          <ul className="icons">
            <li>
              <a href="#" className="icon fa-twitter">
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
          </ul>
          {close}
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
