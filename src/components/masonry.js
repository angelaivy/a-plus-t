import React from "react"
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import Us0 from "../images/us/t-a_0.jpg"
import Us1 from "../images/us/t-a_1.jpg"
import Us2 from "../images/us/t-a_2.jpg"
import Us3 from "../images/us/t-a_3.jpg"
import Us4 from "../images/us/t-a_4.jpg"
import Us5 from "../images/us/t-a_5.jpg"
import Us6 from "../images/us/t-a_6.jpg"
import Us7 from "../images/us/t-a_7.jpg"
import Us8 from "../images/us/t-a_8.jpg"
import Us9 from "../images/us/t-a_9.jpg"
import Us10 from "../images/us/t-a_10.jpg"
import Us11 from "../images/us/t-a_11.jpg"
import Us12 from "../images/us/t-a_12.jpg"
import Us13 from "../images/us/t-a_13.jpg"
import Us14 from "../images/us/t-a_14.jpg"
import Us15 from "../images/us/t-a_15.jpg"

const images = [
    Us0, Us1, Us2, Us3, Us4, Us5, Us14, Us6, Us7, Us8, Us9, Us10, Us11, Us12, Us13, Us15
]

const ImageGrid = () => (
  <section>
    <h4>#WilsonUponAStar</h4>
    <ResponsiveMasonry
      columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
    >
      <Masonry>
          {images.map((image, i) => (
              <img
                  key={i}
                  src={image}
                  style={{width: "100%", display: "block"}}
                  alt=""
              />
          ))}
      </Masonry>
  </ResponsiveMasonry>
  </section>
)

export default ImageGrid