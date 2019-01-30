import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import { connect } from 'react-redux';

import { actionSchema } from 'Data/models/Schemas';
import { createAction as createActionAction } from 'Redux/actions/actions';

class CreateAction extends Component {
  constructor (props) {
    super(props);
    this.state = {
      newAction: ''
    };
  }

  onCreateSuccess = action => {
    this.setState({
      newAction: ''
    });
    const { onSuccess } = this.props;
    if (onSuccess) {
      onSuccess(action);
    }
  };

  onCreateFail = error => {
    // TODO: Handle internal error
    const { onFailure } = this.props;
    if (onFailure) {
      onFailure(error);
    }
  };

  handleNewActionAdd = e => {
    if (e.key === 'Enter' && e.target.value !== '') {
      const { create, domainID } = this.props;
      create(
        actionSchema(domainID, this.state.newAction),
        this.onCreateSuccess,
        this.onCreateFail
      );
    }
  };

  handleChange = e => {
    this.setState({
      newAction: e.target.value
    });
  };

  render () {
    return (
      <TextField
        fullWidth
        margin="normal"
        placeholder="Enter action name and press enter"
        value={this.state.newAction}
        onChange={this.handleChange}
        onKeyPress={this.handleNewActionAdd}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  create: function (actionSchema, onSuccess, onFailure) {
    dispatch(createActionAction(actionSchema, onSuccess, onFailure));
  }
});

CreateAction.propTypes = {
  onSuccess: PropTypes.func,
  onFailure: PropTypes.func,
  create: PropTypes.func,
  domainID: PropTypes.string
};

export default connect(
  null,
  mapDispatchToProps
)(CreateAction);
