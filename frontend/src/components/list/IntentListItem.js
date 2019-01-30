import React, { Component } from 'react';
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton
} from '@material-ui/core';
import Delete from '@material-ui/icons/Delete';
import { connect } from 'react-redux';
import DonutLarge from '@material-ui/icons/DonutLarge';
import PropTypes from 'prop-types';

class IntentListItem extends Component {
  handleSelect = e => {
    console.log('selected');
  };

  render () {
    const { intent, currentIntentID } = this.props;
    return (
      <ListItem
        button
        selected={currentIntentID === intent._id}
        onClick={this.handleSelect}
      >
        <DonutLarge />
        <ListItemText primary={intent.intentName} />
        <ListItemSecondaryAction>
          <IconButton aria-label="Copy">
            <Delete />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    );
  }
}

IntentListItem.propTypes = {
  intent: PropTypes.object,
  currentIntentID: PropTypes.string
};

const mapStateToProps = reduxState => ({
  currentIntentID: reduxState.intents.currentIntent
    ? reduxState.intents.currentIntent._id
    : undefined
});

export default connect(
  mapStateToProps,
  null
)(IntentListItem);
