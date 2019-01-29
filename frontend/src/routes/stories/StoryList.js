import React, { Component, Fragment } from 'react';
import { List, TextField } from '@material-ui/core';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStory as createStoryAction } from 'Redux/stories/actions';
import StoryListItem from './StoryListItem';
import CreateStory from 'Components/forms/CreateStory';

class StoryList extends Component {
  state = {
    errorMessage: '',
    selectedStoryId: 1,
    newStory: ''
  };

  onCreateSuccess = story => {
    const { history, domainID } = this.props;
    history.push(`/domain/${domainID}/stories/${story._id}`);
  };

  onCreateFail = error => {
    this.setState({ errorMessage: error.message });
  };

  handleNewStoryAdd = e => {
    if (e.key === 'Enter' && e.target.value !== '') {
      const { create } = this.props;
      create();
    }
  };
  handleNewStory = e => {
    this.setState({
      newStory: e.target.value
    });
  };

  handleListItemClick = (event, id) => {
    const { history, domainID } = this.props;
    history.push(`/domain/${domainID}/stories/${id}`);
  };

  render () {
    const { storyList } = this.props;
    const stories = storyList.map(story => (
      <StoryListItem
        key={story._id}
        story={story}
        selected={this.props.match.params.storyID === story._id}
        onClick={event => this.handleListItemClick(event, story._id)}
      />
    ));

    return (
      <Fragment>
        <CreateStory
          onSuccess={this.onCreateSuccess}
          onFailure={this.onCreateFail}
          domainID={this.props.domainID}
        />
        <List component="nav">{stories}</List>
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

StoryList.propTypes = {
  create: PropTypes.func,
  storyList: PropTypes.array,
  history: PropTypes.object,
  match: PropTypes.object,
  domainID: PropTypes.string,
  agentID: PropTypes.string
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoryList);
