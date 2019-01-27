import React, { Component, Fragment } from 'react';
import { List, TextField } from '@material-ui/core';
import StoryListItem from 'Components/list/StoryListItem';

class StoryList extends Component {
  state = {
    selectedIndex: 1,
    newStory: '',
    storyList: ['Story 1', 'Story 2', 'Story 3', 'Story 4', 'Story 5']
  };

  handleNewStoryAdd = e => {
    console.log(e.key);
    if (e.key === 'Enter' && e.target.value !== '') {
      this.setState({
        storyList: [...this.state.storyList, this.state.newStory],
        newStory: ''
      });
    }
  };
  handleNewStory = e => {
    this.setState({
      newStory: e.target.value
    });
  };

  handleListItemClick = (event, index) => {
    this.setState({ selectedIndex: index });
  };

  render () {
    const stories = this.state.storyList.map((story, index) => (
      <StoryListItem
        key={index}
        story={story}
        selected={this.state.selectedIndex === index}
        onClick={event => this.handleListItemClick(event, index)}
      />
    ));

    return (
      <Fragment>
        <TextField
          fullWidth
          margin="normal"
          placeholder="Enter story name and press enter"
          value={this.state.newStory}
          onChange={this.handleNewStory}
          onKeyPress={this.handleNewStoryAdd}
        />
        <List component="nav">{stories}</List>
      </Fragment>
    );
  }
}

export default StoryList;
