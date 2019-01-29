import React, { Component } from 'react';
import { storySchema } from 'Data/models/Schemas';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import { connect } from 'react-redux';
import { createStory as createStoryAction } from 'Redux/stories/actions';

class CreateStory extends Component {
  constructor (props) {
    super(props);
    this.state = {
      newStory: ''
    };
  }

  onCreateSuccess = story => {
    this.setState({
      newStory: ''
    });
    const { onSuccess } = this.props;
    if (onSuccess) {
      onSuccess(story);
    }
  };

  onCreateFail = error => {
    // TODO: Handle internal error
    const { onFailure } = this.props;
    if (onFailure) {
      onFailure(error);
    }
  };

  handleNewStoryAdd = e => {
    if (e.key === 'Enter' && e.target.value !== '') {
      const { create, domainID } = this.props;
      create(
        storySchema(domainID, this.state.newStory),
        this.onCreateSuccess,
        this.onCreateFail
      );
    }
  };
  handleChange = e => {
    this.setState({
      newStory: e.target.value
    });
  };

  render () {
    return (
      <TextField
        fullWidth
        margin="normal"
        placeholder="Enter story name and press enter"
        value={this.state.newStory}
        onChange={this.handleChange}
        onKeyPress={this.handleNewStoryAdd}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  create: function (storySchema, onSuccess, onFailure) {
    dispatch(createStoryAction(storySchema, onSuccess, onFailure));
  }
});

CreateStory.propTypes = {
  onSuccess: PropTypes.func,
  onFailure: PropTypes.func,
  create: PropTypes.func,
  domainID: PropTypes.string
};

export default connect(
  null,
  mapDispatchToProps
)(CreateStory);
