import React, { Component, Fragment } from 'react';
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton
} from '@material-ui/core';
import FileCopy from '@material-ui/icons/FileCopy';
import Edit from '@material-ui/icons/Edit';
import PropTypes from 'prop-types';
import { modifyStory } from 'Redux/stories/actions';
import { connect } from 'react-redux';
import RenameStoryDialog from 'Components/forms/RenameStoryDialog';

class StoryListItem extends Component {
  state = {
    renameOpen: false,
    storyName: ''
  };

  changeRenameIsOpenTo = newState => {
    this.setState({
      renameOpen: newState
    });
  };

  handleRenameSuccess = newStory => {};

  handleSaveRename = newName => {
    const {
      story: { _id },
      selected,
      renameStory
    } = this.props;
    console.log(`New Name is ${newName}`);
    renameStory(_id, newName, selected);
    this.changeRenameIsOpenTo(false);
  };

  render () {
    const { story, selected, onClick } = this.props;
    return (
      <Fragment>
        <RenameStoryDialog
          storyName={story.storyName}
          isOpen={this.state.renameOpen}
          onClose={() => {
            this.changeRenameIsOpenTo(false);
          }}
          onSave={this.handleSaveRename}
        />
        <ListItem button selected={selected} onClick={onClick}>
          <ListItemText primary={story.storyName} />
          <ListItemSecondaryAction>
            <IconButton
              aria-label="Edit"
              onClick={() => {
                this.changeRenameIsOpenTo(true);
              }}
            >
              <Edit />
            </IconButton>
            <IconButton aria-label="Copy">
              <FileCopy />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  renameStory: function (
    storyID,
    newName,
    isCurrent,
    onSuccess = null,
    onFailure = null
  ) {
    dispatch(
      modifyStory(
        storyID,
        { storyName: newName },
        isCurrent,
        onSuccess,
        onFailure
      )
    );
  }
});

StoryListItem.propTypes = {
  story: PropTypes.object,
  selected: PropTypes.bool,
  onClick: PropTypes.func,
  renameStory: PropTypes.func
};

export default connect(
  null,
  mapDispatchToProps
)(StoryListItem);
