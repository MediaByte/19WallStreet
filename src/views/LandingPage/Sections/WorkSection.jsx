import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";

//Project components
import EmailSent from './emailSent'

import workStyle from "assets/jss/material-kit-react/views/landingPageSections/workStyle.jsx";

class WorkSection extends React.Component {
  constructor() {
    super();
    this.state = { 
      name: '',
      email: '',
      phone: '',
      open: false,
    }
  }

 handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  onNameChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

   onEmailChange = (event) => {
    this.setState({
      email: event.target.value
    })
  }

   onPhoneChange = (event) => {
    this.setState({
      phone: event.target.value
    })
  }

  onSendEmail = () => {
    const { name, email, phone } = this.state
    fetch('http://crg-server.herokuapp.com/api/sendEmail', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        name: name,
        email: email,
        phone: phone,
        replyto: 'Giro@CommonRealtyGroup.com',
        subject: "19 Wall Street, Arlington, MA",
        message: `Hello ${name}, as promised here is a link to the full details on the property located at 19 Wall Street, Arlington, MA - https://tinyurl.com/y7rw9fwp - Let me know when you want to schedule a property tour. Feel free to text me at 617-899-1097 or reply to this email if you have any additional questions.`
      })
    })
      .then(response => {
        if (response.status === 200) {
          this.setState({
            open: true
          })
        } else {
          alert('There was a problem sending your email. Please check your email and try again')
        }
      })
      .catch(console.log);
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem cs={12} sm={12} md={8}>
            <h2 className={classes.title}>Get the full details sent to your inbox</h2>
            <h4 className={classes.description}>
              With so many wonderful features, this home is 
              not to be missed.
            </h4>
            <div>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Name"
                    id="name"
                    formControlProps={{
                      fullWidth: true,
                      onChange: (event) => this.onNameChange(event)
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Email"
                    id="email"
                    formControlProps={{
                      fullWidth: true,
                      onChange: (event) => this.onEmailChange(event)
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Phone"
                    id="phone"
                    formControlProps={{
                      fullWidth: true,
                      onChange: (event) => this.onPhoneChange(event)
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer justify="center">
                <GridItem
                  xs={12}
                  sm={12}
                  md={4}
                  className={classes.textCenter}
                >
                  <Button 
                    color="danger"
                    onClick={this.onSendEmail}
                  >
                    Send me the Details
                  </Button>
                  <EmailSent 
                    open={this.state.open}
                    handleClose={this.handleClose}
                    email={this.state.email}
                  />
                </GridItem>
              </GridContainer>
            </div>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(workStyle)(WorkSection);
