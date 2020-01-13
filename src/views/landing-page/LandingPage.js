import React from "react";
import Footer from "components/Footer/Footer.js";
import Header from "components/Header/Header.js";
import LandingContent from "views/landing-content/LandingContent.js";
import { makeStyles } from "@material-ui/core/styles";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import image1 from "assets/img/slider-1.jpg"
import image2 from "assets/img/slider-2.jpg"
import image3 from "assets/img/slider-3.jpeg"
import image4 from "assets/img/slider-4.jpg"

import "views/landing-content/landing-content.css";

import styles from "assets/jss/material-dashboard-react/components/headerStyle.js";
import "views/landing-page/landing-page.css";
const useStyles = makeStyles(styles);

export default function LandingPage({ ...rest }) {
  const classes = useStyles();
  return (
    <div className="content">
      <Carousel showThumbs={false} showIndicators={false} className="carousel">
        <div>
          <img src={image1} />
          <p className="legend">
          Legend 1
          </p>
        </div>
        <div>
          <img src={image2} />
          <p className="legend">
          Legend 2
          </p>
        </div>
        <div>
          <img src={image3} />
          <p className="legend">
          Legend 3
          </p>
        </div>
        <div>
          <img src={image4} />
          <p className="legend">
          Legend 4
          </p>
        </div>
      </Carousel>
      <Header></Header>
      <Footer></Footer>
    </div>
  );
}
