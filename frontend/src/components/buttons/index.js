import React from 'react';
import Fab from '@material-ui/core/Fab';
import { withStyles } from '@material-ui/core/styles';

const buttonStyles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  icon: {
    marginRight: theme.spacing.unit
  }
});

export const StyledFab = withStyles(buttonStyles, { withTheme: true })(
  props => {
    const { classes, type, children, Icon, overrides, onClick } = props;
    return (
      <Fab
        type={type || 'button'}
        variant="extended"
        size="medium"
        className={classes.button}
        onClick={onClick || null}
        {...overrides}
      >
        {Icon && <Icon className={classes.icon} />}
        {children}
      </Fab>
    );
  }
);
