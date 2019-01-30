import React, { Component } from 'react';
import {
  ListItem,
  ListItemText
  // ListItemSecondaryAction,
  // IconButton
} from '@material-ui/core';
// import Delete from '@material-ui/icons/Delete';
// import { connect } from 'react-redux';
// import DonutLarge from '@material-ui/icons/DonutLarge';
import PropTypes from 'prop-types';

class IntentListItem extends Component {
  render () {
    const { intent, selected, onClick } = this.props;
    return (
      <ListItem selected={selected} onClick={onClick}>
        {/* <DonutLarge /> */}
        <ListItemText primary={intent.intentName} />
        {/* <ListItemSecondaryAction>
          <IconButton aria-label="Copy">
            <Delete />
          </IconButton>
        </ListItemSecondaryAction> */}
      </ListItem>
    );
  }
}

IntentListItem.propTypes = {
  intent: PropTypes.object,
  selected: PropTypes.bool,
  onClick: PropTypes.func
};

export default IntentListItem;
// const mapStateToProps = reduxState => ({
//   selected: PropTypes.bool,
//   onClick: PropTypes.func
// });

// export default connect(
//   mapStateToProps,
//   null
// )(IntentListItem);
