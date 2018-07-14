import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

//Scroll to Form
import scrollToComponent from 'react-scroll-to-component';

// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";

// Sections for this page
import ProductSection from "./Sections/ProductSection.jsx";
import Photos from "./Sections/Photos.js";
import WorkSection from "./Sections/WorkSection.jsx";
import TeamSection from "./Sections/TeamSection.jsx";

const dashboardRoutes = [];

class LandingPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          color="transparent"
          routes={dashboardRoutes}
          brand="Common Realty Group"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          {...rest}
        />
        <Parallax filter image={require("assets/img/landing-bg.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>Just Listed.</h1>
                <h4>
                  Gorgeous, old-style cape, single family home for sale in 
                  highly desirable Brackett School district. Located on a private, quiet, 
                  side street in Arlington, MA. Get the full
                  details sent to your inbox. 
                </h4>
                <br />
                <Button
                  color="danger"
                  size="lg"
                  rel="noopener noreferrer"
                  onClick={() => scrollToComponent(this.WorkSection, { align: 'top' })}
                >
                  <i className="fas fa-envelope" />Send me the Details
                </Button>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <ProductSection />
            <Photos />
            <TeamSection />
            <WorkSection 
              ref={(section) => { this.WorkSection = section; }}
            />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(LandingPage);
