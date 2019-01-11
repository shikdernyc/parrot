import React from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

const textFieldStyles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  }
});

export const StyledTextField = withStyles(textFieldStyles, { withTheme: true })(
  props => {
    const {
      classes,
      children,
      name,
      label,
      placeholder,
      fullWidth,
      value,
      onChange,
      overrides
    } = props;
    const control = value ? { value: value } : {};
    return (
      <TextField
        className={classes.textField}
        margin="normal"
        name={name || ''}
        label={label || ''}
        placeholder={placeholder || ''}
        fullWidth={fullWidth || false}
        onChange={onChange || null}
        variant="outlined"
        InputLabelProps={{
          shrink: true
        }}
        {...control}
        {...overrides}
      >
        {children}
      </TextField>
    );
  }
);
StyledTextField.propTypes = {
  children: PropTypes.array,
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  fullWidth: PropTypes.bool,
  value: PropTypes.node,
  onChange: PropTypes.func,
  overrides: PropTypes.object
};

const selectStyles = theme => ({
  menu: {
    width: 200
  }
});

export const StyledMenuSelect = withStyles(selectStyles, { withTheme: true })(
  props => {
    const { classes, children, overrides } = props;
    return (
      <StyledTextField
        select
        SelectProps={{
          MenuProps: {
            className: classes.menu
          }
        }}
        {...overrides}
      >
        {children}
      </StyledTextField>
    );
  }
);

StyledMenuSelect.propTypes = {
  children: PropTypes.array,
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  fullWidth: PropTypes.bool,
  value: PropTypes.node,
  onChange: PropTypes.func,
  overrides: PropTypes.object
};
