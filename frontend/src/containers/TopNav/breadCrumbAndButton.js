import React, { Component } from "react";
import Base from "./base";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import MenuIcon from "@material-ui/icons/Menu";
import { NavLink } from "react-router-dom";

const styles = theme => {
  return {
    root: {
      flexGrow: 1
    },
    breadcrumb: {
      marginLeft: -12,
      marginRight: 20
    },
    grow: {
      flexGrow: 1
    },
    buttonLink: {
      textDecoration: "none",
      fontWeight: 400,
      display: "inline-block",
      // margin: "8px 3px",
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 3,
      paddingRight: 3
    },
    paperButton: {
      ...theme.palette.action,
      background: theme.palette.grey[50]
    }
  };
};

class BreadCrumbAndButton extends Component {
  render() {
    const { classes, buttonLink, buttonText } = this.props;
    return (
      <Base>
        <IconButton
          className={classes.breadcrumb}
          color="inherit"
          aria-label="Menu"
        >
          <MenuIcon />
        </IconButton>
        <div className={classes.grow} />
        {buttonText != "" && (
          <Paper className={classes.paperButton}>
            <NavLink to={buttonLink} className={classes.buttonLink}>
              {buttonText}
            </NavLink>
          </Paper>
        )}
      </Base>
    );
  }
}

BreadCrumbAndButton.propTypes = {
  classes: PropTypes.object.isRequired,
  buttonText: PropTypes.string,
  buttonLink: PropTypes.string
};

export default withStyles(styles, { withTheme: true })(BreadCrumbAndButton);
