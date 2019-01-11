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
    const { classes, children, Icon, overrides } = props;
    return (
      <Fab
        variant="extended"
        size="medium"
        className={classes.button}
        {...overrides}
      >
        {Icon && <Icon className={classes.icon} />}
        {children}
      </Fab>
    );
  }
);
