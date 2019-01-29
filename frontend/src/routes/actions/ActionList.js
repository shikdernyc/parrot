import React, { Component, Fragment } from 'react';
import { List, TextField } from '@material-ui/core';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createAction as createActionAction, loadAllAction as loadAllActionAction } from 'Redux/actions/actions';
import ActionListItem from './ActionListItem';
// import CreateAction from 'Components/forms/CreateAction';

class ActionList extends Component {
  state = {
    errorMessage: '',
    selectedActionId: 1,
    newAction: ''
  };

  onCreateSuccess = action => {
    const { history, domainID } = this.props;
    history.push(`/domain/${domainID}/action/${action._id}`);
  };

  onCreateFail = error => {
    this.setState({ errorMessage: error.message });
  };

  handleNewActionAdd = e => {
    if (e.key === 'Enter' && e.target.value !== '') {
      const { create } = this.props;
      create();
    }
  };
  handleNewAction = e => {
    this.setState({
      newAction: e.target.value
    });
  };

  handleListItemClick = (event, id) => {
    const { history, domainID } = this.props;
    history.push(`/domain/${domainID}/action/${id}`);
  };

  render () {
    const { actionList } = this.props;
    const actions = actionList.map(action => (
      <ActionListItem
        key={action._id}
        action={action}
        selected={this.props.match.params.actionID === action._id}
        onClick={event => this.handleListItemClick(event, action._id)}
      />
    ));

    return (
      <Fragment>
        {/* <CreateAction
          onSuccess={this.onCreateSuccess}
          onFailure={this.onCreateFail}
          domainID={this.props.domainID}
        /> */}
        <List component="nav">{actions}</List>
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  create: function (actionSchema, onCreateSuccess, onFailure) {
    dispatch(createActionAction(actionSchema, onCreateSuccess, onFailure));
  },
  loadAllActions: function (domainID) {
    dispatch(loadAllActionAction(domainID));
  }
});

const mapStateToProps = state => ({
  actionList: state.actions.actionList,
  domainID: state.domains.currentDomain
    ? state.domains.currentDomain._id
    : null
});

ActionList.propTypes = {
  create: PropTypes.func,
  actionList: PropTypes.array,
  history: PropTypes.object,
  match: PropTypes.object,
  domainID: PropTypes.string,
  agentID: PropTypes.string
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActionList);