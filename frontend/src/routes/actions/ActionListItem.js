import React, { Component } from 'react';
import {
  ListItem,
  ListItemText
  // ListItemSecondaryAction,
  // IconButton
} from '@material-ui/core';
// import FileCopy from '@material-ui/icons/FileCopy';
// import Edit from '@material-ui/icons/Edit';
import PropTypes from 'prop-types';

class ActionListItem extends Component {
  render () {
    const { action, selected, onClick } = this.props;
    return (
      <ListItem button selected={selected} onClick={onClick}>
        <ListItemText primary={action.actionName} />
        {/* <ListItemSecondaryAction>
          <IconButton aria-label="Edit">
            <Edit />
          </IconButton>
          <IconButton aria-label="Copy">
            <FileCopy />
          </IconButton>
        </ListItemSecondaryAction> */}
      </ListItem>
    );
  }
}

ActionListItem.propTypes = {
  action: PropTypes.object,
  selected: PropTypes.bool,
  onClick: PropTypes.func
};

export default ActionListItem;
