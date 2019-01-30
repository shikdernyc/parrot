import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import IntentListItem from 'Components/list/IntentListItem';
import { List } from '@material-ui/core';
import CreateIntent from 'Components/forms/CreateIntent';

class IntentList extends Component {
  onCreateSuccess = intent => {
    const { history, domainID } = this.props;
    history.push(`/domain/${domainID}/intents/${intent._id}`);
  };

  onCreateFail = error => {
    this.setState({ errorMessage: error.message });
  }

  handleListItemClick = (id) => {
    const { history, domainID } = this.props;
    history.push(`/domain/${domainID}/intents/${id}`);
  };

  render () {
    const { intentList } = this.props;
    const intents = intentList.map(intent => (
      <IntentListItem
        key={intent._id}
        intent={intent}
        selected={this.props.match.params.intentID === intent._id}
        onClick={event => this.handleListItemClick(intent._id)}
      />
    ));
    // return <List component="nav">{eventList}</List>;
    return (
      <Fragment>
        <CreateIntent
          onSuccess={this.onCreateSuccess}
          onFailure={this.onCreateFail}
          domainID={this.props.domainID}
        />
        <List component="nav">{intents}</List>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    intentList: state.intents.intentList,
    domainID: state.domains.currentDomain
      ? state.domains.currentDomain._id
      : null
  };
};

IntentList.propTypes = {
  match: PropTypes.object,
  history: PropTypes.object,
  intentList: PropTypes.array,
  domainID: PropTypes.string
};

export default connect(
  mapStateToProps,
  null
)(IntentList);
