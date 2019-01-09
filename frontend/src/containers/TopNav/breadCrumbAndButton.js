import React, { Component } from 'react';
import Base from './base';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';

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
      textDecoration: 'none',
      color: theme.palette.text.primary
    },
    button: {}
  };
};

class BreadCrumbAndButton extends Component {
  render () {
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
        {buttonText !== '' && (
          <NavLink to={buttonLink} className={classes.buttonLink}>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              {buttonText}
            </Button>
          </NavLink>
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
