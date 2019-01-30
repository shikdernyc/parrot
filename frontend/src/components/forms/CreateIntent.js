import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import { connect } from 'react-redux';

import { intentSchema } from 'Data/models/Schemas';
import { createIntent as createIntentAction } from 'Redux/intents/actions';

class CreateIntent extends Component {
  constructor (props) {
    super(props);
    this.state = {
      newIntent: ''
    };
  }

  onCreateSuccess = intent => {
    this.setState({
      newIntent: ''
    });
    const { onSuccess } = this.props;
    if (onSuccess) {
      onSuccess(intent);
    }
  };

  onCreateFail = error => {
    // TODO: Handle internal error
    const { onFailure } = this.props;
    if (onFailure) {
      onFailure(error);
    }
  };

  handleNewIntentAdd = e => {
    if (e.key === 'Enter' && e.target.value !== '') {
      const { create, domainID } = this.props;
      create(
        intentSchema(domainID, this.state.newIntent),
        this.onCreateSuccess,
        this.onCreateFail
      );
    }
  };

  handleChange = e => {
    this.setState({
      newIntent: e.target.value
    });
  };

  render () {
    return (
      <TextField
        fullWidth
        margin="normal"
        placeholder="Enter intent name and press enter"
        value={this.state.newIntent}
        onChange={this.handleChange}
        onKeyPress={this.handleNewIntentAdd}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  create: function (intentSchema, onSuccess, onFailure) {
    dispatch(createIntentAction(intentSchema, onSuccess, onFailure));
  }
});

CreateIntent.propTypes = {
  onSuccess: PropTypes.func,
  onFailure: PropTypes.func,
  create: PropTypes.func,
  domainID: PropTypes.string
};

export default connect(
  null,
  mapDispatchToProps
)(CreateIntent);
