import React, { Component } from 'react';
import { StyledTextField } from 'Components/inputs/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Grid from '@material-ui/core/Grid';
import SaveAlt from '@material-ui/icons/SaveAlt';
import { StyledFab } from 'Components/buttons';

class Create extends Component {
  state = {
    domainName: '',
    intentThreshold: 65
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render () {
    return (
      <form>
        <Grid container spacing={24}>
          <Grid item xs={8} sm={8}>
            <StyledTextField
              fullWidth
              name="domainName"
              label="Domain Name"
              placeholder="Type in your domain name"
              value={this.state.domainName}
              onChange={this.handleChange}
            />
          </Grid>
          <Grid item sm={4}>
            <StyledTextField
              name="intentThreshold"
              label="Intent Threshold Percentage"
              value={this.state.intentThreshold}
              onChange={this.handleChange}
              helperText="Agent's Confidence Threshold"
              type="number"
              InputProps={{
                shrink: true,
                endAdornment: <InputAdornment position="end">%</InputAdornment>
              }}
            />
          </Grid>
        </Grid>
        <StyledFab Icon={SaveAlt}>Create Domain</StyledFab>
      </form>
    );
  }
}

export default Create;
