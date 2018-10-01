import React from "react";

class Still extends React.Component {
  render() {
    return (
      <div className="still">
        <a href={this.props.image} rel="noopener noreferrer" target="_blank">
          <img src={this.props.image} alt={this.props.alt} width="600" />
        </a>
      </div>
    );
  }
}

export default Still;
