import React, { Component } from 'react';
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  TextField
} from '@material-ui/core';
import FileCopy from '@material-ui/icons/FileCopy';
import Edit from '@material-ui/icons/Edit';
import PropTypes from 'prop-types';

class StoryListItem extends Component {
  render () {
    const { story, selected, onClick } = this.props;
    return (
      <ListItem button selected={selected} onClick={onClick}>
        <ListItemText primary={story} />
        <ListItemSecondaryAction>
          <IconButton aria-label="Edit">
            <Edit />
          </IconButton>
          <IconButton aria-label="Copy">
            <FileCopy />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    );
  }
}

StoryListItem.propTypes = {
  story: PropTypes.object,
  selected: PropTypes.bool,
  onClick: PropTypes.func
};

export default StoryListItem;
