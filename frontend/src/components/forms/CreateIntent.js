import React, { Component } from 'react';
import { intentSchema } from 'Data/models/Schemas';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import { connect } from 'react-redux';
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

  handleNew = e => {
    if (e.key === 'Enter' && e.target.value !== '') {
      const { create, domainID } = this.props;
      create(
        domainID,
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
        onKeyPress={this.handleNew}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  create: function (domainID, intentSchema, onSuccess, onFailure) {
    dispatch(createIntentAction(domainID, intentSchema, onSuccess, onFailure));
  }
});

const mapStateToProps = reduxState => ({
  domainID: reduxState.domains.currentDomain
    ? reduxState.domains.currentDomain._id
    : undefined
});

CreateIntent.propTypes = {
  onSuccess: PropTypes.func,
  onFailure: PropTypes.func,
  create: PropTypes.func,
  domainID: PropTypes.string
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateIntent);
