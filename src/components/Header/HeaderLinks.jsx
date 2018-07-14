/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, Phone } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

function HeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Links"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <a
              href="https://www.arlingtonma.gov/"
              target="_blank"
              className={classes.dropdownLink}
            >
              Town of Arlington
            </a>,
            <a
              href="http://brackettelementary.org/"
              target="_blank"
              className={classes.dropdownLink}
            >
              Brackett Elementary School
            </a>,
            <a
              href="https://www.arlingtonrec.com/info/facilities/details.aspx?FacilityID=13524"
              target="_blank"
              className={classes.dropdownLink}
            >
              Robbins Farm Park
            </a>,
            <a
              href="https://friendsofmenotomy.org/"
              target="_blank"
              className={classes.dropdownLink}
            >
              Menotomy Rocks Park
            </a>,
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="tel:617-902-0219"
          color="transparent"
          className={classes.navLink}
        >
          <Phone className={classes.icons} /> Call us
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-twitter"
          title="Follow us on twitter"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://twitter.com/RealtyBoston"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-twitter"} />Twitter
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
