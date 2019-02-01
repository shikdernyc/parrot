import React, { Component, Fragment } from 'react';
import { List } from '@material-ui/core';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import StoryListItem from 'Components/list/StoryListItem';
import { modifyStory } from 'Redux/stories/actions';

class StoryList extends Component {
  onSelect = (event, storyID) => {
    this.props.onSelect(storyID);
  };

  render () {
    const { storyList, selectedStoryID } = this.props;
    const stories = storyList.map(story => (
      <StoryListItem
        key={story._id}
        story={story}
        selected={selectedStoryID === story._id}
        onClick={event => this.onSelect(event, story._id)}
      />
    ));

    return (
      <Fragment>
        <List component="nav">{stories}</List>
      </Fragment>
    );
  }
}

const mapStateToProps = reduxState => ({
  storyList: reduxState.stories.storyList
});

StoryList.propTypes = {
  storyList: PropTypes.array,
  history: PropTypes.object,
  match: PropTypes.object,
  selectedStoryID: PropTypes.string,
  onSelect: PropTypes.func
};

export default connect(mapStateToProps)(StoryList);
