import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import IntentListItem from 'Components/list/IntentListItem';
import { List } from '@material-ui/core';
import CreateIntent from 'Components/forms/CreateIntent';

class IntentList extends Component {
  render () {
    const { intentList } = this.props;
    const intents = intentList.map(currentIntent => (
      <IntentListItem key={currentIntent._id} intent={currentIntent} />
    ));
    // return <List component="nav">{eventList}</List>;
    return (
      <Fragment>
        <CreateIntent />
        <List component="nav">{intents}</List>
      </Fragment>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    intentList: reduxState.intents.intentList
  };
};

IntentList.propTypes = {
  intentList: PropTypes.array
};

export default connect(
  mapStateToProps,
  null
)(IntentList);
