import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import SectionCarousel from "./SectionCarousel.jsx"

import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";

class Photos extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Photos</h2>
            <h5 className={classes.description}> 
              This charming, two bedroom home can be found sited on a 
              generous lot plan. Upstairs boasts two ample sized bedrooms, 
              plenty of closet space, natural lighting, and a recently remodeled 
              full bath. This home also features a gorgeous, composite 18 x 30 
              deck overlooking a large backyard. 
            </h5>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <SectionCarousel />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(productStyle)(Photos);
