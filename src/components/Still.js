import React from "react"
import Lightbox from 'react-image-lightbox'

const Still = ({image}) => (
  <div className="still">
    <img src={image} alt="still" width="600"/>
    {/* <Lightbox
      mainSrc={image}
    /> */}
  </div>
)

export default Still;