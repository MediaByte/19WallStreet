import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import teamStyle from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.jsx";

import team1 from "assets/img/faces/mario.jpg";
import team2 from "assets/img/faces/giro.jpg";

class TeamSection extends React.Component {
  render() {
    const { classes } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    return (
      <div className={classes.section}>
        <h2 className={classes.title}>Meet the Team</h2>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={team1} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Mario Martin
                  <br />
                  <small className={classes.smallTitle}>Team Contact</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    My name is Mario Martin. I am a developer/investor 
                    and a Managing Partner at Common Realty Group. I am here 
                    to answer any questions you might have about the property. 
                    Feel free to contact Giro Dibiase if you have an offer.
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Button
                    justIcon
                    href="tel:617-902-0219"
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fa fa-phone"} />
                  </Button>
                  <Button
                    justIcon
                    href="mailto:mario@commonrealtygroup.com"
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fa fa-envelope"} />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={team2} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Giro Dibiase
                  <br />
                  <small className={classes.smallTitle}>Broker of Record</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    My name is Giro Dibiase.  I am the broker of record at 
                    Common Realty Group.  Drop Mario a line if you have any questions.
                    I represent the seller of this wonderful property and am hopeful 
                    I'll meet you at my next showing.
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Button
                    justIcon
                    href="tel:617-902-0219"
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fa fa-phone"} />
                  </Button>
                  <Button
                    justIcon
                    href="mailto:giro@commonrealtygroup.com"
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fa fa-envelope"} />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(teamStyle)(TeamSection);
