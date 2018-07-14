import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import carouselStyle from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.jsx";
import image1 from "assets/img/image1.jpg";
import image2 from "assets/img/image2.jpg";
import image3 from "assets/img/image3.jpg";
import image4 from "assets/img/image4.jpg";
import image5 from "assets/img/image5.jpg";
import image6 from "assets/img/image6.jpg";
import image7 from "assets/img/image7.jpg";
import image8 from "assets/img/image8.jpg";
import image11 from "assets/img/image11.jpg";
import image12 from "assets/img/image12.jpg";
import image13 from "assets/img/image13.jpg";
import image14 from "assets/img/image14.jpg";
import image15 from "assets/img/image15.jpg";
import image16 from "assets/img/image16.jpg";
import image17 from "assets/img/image17.jpg";
import image18 from "assets/img/image18.jpg";
import image19 from "assets/img/image19.jpg";

class SectionCarousel extends React.Component {
  render() {
    const { classes } = this.props;
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true
    };
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
              <Card carousel>
                <Carousel {...settings}>
                  <div>
                    <img
                      src={image1}
                      alt="House Front"
                      className="slick-image"
                    />
                    <div className="slick-caption">
                      <h4>
                        <LocationOn className="slick-icons" />House
                        Front
                      </h4>
                    </div>
                  </div>
                  <div>
                    <img
                      src={image2}
                      alt="Left Exterior Side"
                      className="slick-image"
                    />
                    <div className="slick-caption">
                      <h4>
                        <LocationOn className="slick-icons" />Left Exterior Side
                      </h4>
                    </div>
                  </div>
                  <div>
                    <img
                      src={image3}
                      alt="Right Exterior Side"
                      className="slick-image"
                    />
                    <div className="slick-caption">
                      <h4>
                        <LocationOn className="slick-icons" />Right Exterior Side
                      </h4>
                    </div>
                  </div>
                  <div>
                    <img
                      src={image4}
                      alt="Living Room"
                      className="slick-image"
                    />
                    <div className="slick-caption">
                      <h4>
                        <LocationOn className="slick-icons" />Living Room
                      </h4>
                    </div>
                  </div>
                  <div>
                    <img
                      src={image5}
                      alt="Living Room"
                      className="slick-image"
                    />
                    <div className="slick-caption">
                      <h4>
                        <LocationOn className="slick-icons" />Living Room
                      </h4>
                    </div>
                  </div>
                  <div>
                    <img
                      src={image6}
                      alt="Kitchen"
                      className="slick-image"
                    />
                    <div className="slick-caption">
                      <h4>
                        <LocationOn className="slick-icons" />Kitchen
                      </h4>
                    </div>
                  </div>
                  <div>
                    <img
                      src={image7}
                      alt="Kitchen"
                      className="slick-image"
                    />
                    <div className="slick-caption">
                      <h4>
                        <LocationOn className="slick-icons" />Kitchen
                      </h4>
                    </div>
                  </div>
                  <div>
                    <img
                      src={image8}
                      alt="Kitchen"
                      className="slick-image"
                    />
                    <div className="slick-caption">
                      <h4>
                        <LocationOn className="slick-icons" />Kitchen
                      </h4>
                    </div>
                  </div>
                  <div>
                    <img
                      src={image11}
                      alt="Master Bedroom"
                      className="slick-image"
                    />
                    <div className="slick-caption">
                      <h4>
                        <LocationOn className="slick-icons" />Master Bedroom
                      </h4>
                    </div>
                  </div>
                  <div>
                    <img
                      src={image12}
                      alt="Master Bedroom"
                      className="slick-image"
                    />
                    <div className="slick-caption">
                      <h4>
                        <LocationOn className="slick-icons" />Master Bedroom
                      </h4>
                    </div>
                  </div>
                  <div>
                    <img
                      src={image13}
                      alt="Second Bedroom"
                      className="slick-image"
                    />
                    <div className="slick-caption">
                      <h4>
                        <LocationOn className="slick-icons" />Second Bedroom
                      </h4>
                    </div>
                  </div>
                  <div>
                    <img
                      src={image14}
                      alt="Second Bedroom"
                      className="slick-image"
                    />
                    <div className="slick-caption">
                      <h4>
                        <LocationOn className="slick-icons" />Second Bedroom
                      </h4>
                    </div>
                  </div>
                  <div>
                    <img
                      src={image15}
                      alt="Dining Room"
                      className="slick-image"
                    />
                    <div className="slick-caption">
                      <h4>
                        <LocationOn className="slick-icons" />Dining Room
                      </h4>
                    </div>
                  </div>
                  <div>
                    <img
                      src={image16}
                      alt="Finished Basement"
                      className="slick-image"
                    />
                    <div className="slick-caption">
                      <h4>
                        <LocationOn className="slick-icons" />Finished Basement
                      </h4>
                    </div>
                  </div>
                  <div>
                    <img
                      src={image17}
                      alt="Deck"
                      className="slick-image"
                    />
                    <div className="slick-caption">
                      <h4>
                        <LocationOn className="slick-icons" />Deck
                      </h4>
                    </div>
                  </div>
                  <div>
                    <img
                      src={image18}
                      alt="Deck"
                      className="slick-image"
                    />
                    <div className="slick-caption">
                      <h4>
                        <LocationOn className="slick-icons" />Deck
                      </h4>
                    </div>
                  </div>
                  <div>
                    <img
                      src={image19}
                      alt="Deck"
                      className="slick-image"
                    />
                    <div className="slick-caption">
                      <h4>
                        <LocationOn className="slick-icons" />Deck
                      </h4>
                    </div>
                  </div>
                </Carousel>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(carouselStyle)(SectionCarousel);
