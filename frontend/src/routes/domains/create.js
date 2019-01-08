import React, { Component } from "react";
import { TextField } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  slider: {
    padding: "22px 0px"
  },
  button: {
    margin: theme.spacing.unit
  },
  icon: {
    marginRight: theme.spacing.unit
  },
});

class Create extends Component {
  state = {
    domainName: "",
    intentThreshold: 65
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <form>
        <Grid container spacing={24}>
          <Grid item xs={18} sm={8}>
            <TextField
              fullWidth
              name="domainName"
              label="Domain Name"
              variant="outlined"
              placeholder="Type in your domain name"
              variant="outlined"
              value={this.state.domainName}
              InputLabelProps={{
                shrink: true
              }}
              margin="normal"
              onChange={this.handleChange}
            />
          </Grid>
          <Grid item sm={4}>
            <TextField
              // className={classNames(classes.margin, classes.textField)}
              name="intentThreshold"
              variant="outlined"
              label="Intent Threshold Percentage"
              value={this.state.intentThreshold}
              onChange={this.handleChange}
              helperText="Agent's Confidence Treshold"
              margin="normal"
              type="number"
              InputProps={{
                shrink: true,
                endAdornment: <InputAdornment position="end">%</InputAdornment>
              }}
            />
          </Grid>
        </Grid>
        <Button variant="extendedFab" size="medium" color="secondary" className={classes.button}>
          <SaveAlt className={classes.icon} />
          Create Domain
        </Button>
      </form>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Create);
