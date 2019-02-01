import React, { Component, Fragment } from 'react';
import { List, TextField, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStory as createStoryAction } from 'Redux/stories/actions';
import StoryList from 'Components/list/StoryList';
import CreateStory from 'Components/forms/CreateStory';

class Stories extends Component {
  state = {
    errorMessage: ''
  };

  onCreateSuccess = story => {
    const { history, domainID, agentID } = this.props;
    // history.push(`/agent/${agentID}/domain/${domainID}/stories/${story._id}`);
    history.push(`/domain/${domainID}/stories/${story._id}`);
  };

  onCreateFail = error => {
    this.setState({ errorMessage: error.message });
  };

  onStorySelect = storyID => {
    const { history, domainID, agentID } = this.props;
    history.push(`/domain/${domainID}/stories/${storyID}`);
  };

  render () {
    const {
      storyList,
      domainID,
      match: {
        params: { storyID }
      }
    } = this.props;
    return (
      <Fragment>
        <CreateStory
          onSuccess={this.onCreateSuccess}
          onFailure={this.onCreateFail}
          domainID={this.props.domainID}
        />
        <StoryList
          stories={storyList}
          selectedStoryID={storyID}
          onSelect={this.onStorySelect}
        />
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  create: function (storySchema, onCreateSuccess, onFailure) {
    dispatch(createStoryAction(storySchema, onCreateSuccess, onFailure));
  }
});

const mapStateToProps = reduxState => ({
  storyList: reduxState.stories.storyList,
  agentID: reduxState.agents.currentAgent
    ? reduxState.agents.currentAgent._id
    : null,
  domainID: reduxState.domains.currentDomain
    ? reduxState.domains.currentDomain._id
    : null
});

Stories.propTypes = {
  storyList: PropTypes.array,
  domainID: PropTypes.string,
  agentID: PropTypes.string,
  history: PropTypes.object,
  match: PropTypes.object
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Stories);
