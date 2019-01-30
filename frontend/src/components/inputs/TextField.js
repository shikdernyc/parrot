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

class StyledTextFieldComponent extends React.Component {
  state = {
    value: ''
  };

  onChange = (event) => {
    this.setState({
      value: event.target.value
    });
    this.props.onChange(event);
  }

  render () {
    const {
      classes,
      children,
      name,
      label,
      placeholder,
      fullWidth,
      value,
      overrides,
      required,
      defaultValue
    } = this.props;
    const control = value ? { value: value } : {};
    return (
      <TextField
        className={classes.textField}
        value={this.state.value}
        defaultValue={defaultValue}
        margin="normal"
        name={name || ''}
        label={label || ''}
        placeholder={placeholder || ''}
        fullWidth={fullWidth || false}
        onChange={this.onChange}
        variant="outlined"
        InputLabelProps={{
          shrink: true
        }}
        required={required}
        {...control}
        {...overrides}
      >
        {children}
      </TextField>
    );
  }
}

StyledTextFieldComponent.propTypes = {
  classes: PropTypes.object,
  children: PropTypes.array,
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  fullWidth: PropTypes.bool,
  required: PropTypes.bool,
  value: PropTypes.node,
  onChange: PropTypes.func,
  overrides: PropTypes.object,
  defaultValue: PropTypes.string
};

export const StyledTextField = withStyles(textFieldStyles, { withTheme: true })(StyledTextFieldComponent);

const selectStyles = theme => ({
  menu: {
    width: 200
  }
});

const StyledMenuSelectComponent = (props) => {
  const {
    classes,
    children,
    name,
    label,
    placeholder,
    helperText,
    fullWidth,
    value,
    onChange,
    overrides
  } = props;
  const control = value ? { value } : {};
  return (
    <StyledTextField
      name={name || ''}
      label={label || ''}
      placeholder={placeholder || ''}
      helperText={helperText || ''}
      fullWidth={fullWidth || false}
      onChange={onChange || null}
      InputLabelProps={{
        shrink: true
      }}
      SelectProps={{
        MenuProps: {
          className: classes.menu
        }
      }}
      {...control}
      overrides={{ select: true, ...overrides }}
    >
      {children}
    </StyledTextField>
  );
};

StyledMenuSelectComponent.propTypes = {
  classes: PropTypes.object,
  children: PropTypes.array,
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  helperText: PropTypes.string,
  fullWidth: PropTypes.bool,
  value: PropTypes.node,
  onChange: PropTypes.func,
  overrides: PropTypes.object
};

export const StyledMenuSelect = withStyles(selectStyles, { withTheme: true })(StyledMenuSelectComponent);
