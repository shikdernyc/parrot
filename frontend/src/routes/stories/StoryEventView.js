import React, { Component } from 'react';
import StoryList from './StoryList';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import CreateEvent from 'Components/forms/CreateEvent';
import EventList from 'Components/list/EventList';
import { setCurrentStoryID as actionSetCurrentStoryID } from 'Redux/stories/actions';

class StoryEventView extends Component {
  componentDidMount () {
    const {
      setCurrentStoryID,
      match: {
        params: { storyID }
      }
    } = this.props;
    setCurrentStoryID(storyID);
  }

  render () {
    return (
      <Grid container spacing={40}>
        <Grid item xs={6}>
          <StoryList match={this.props.match} history={this.props.history} />
        </Grid>
        <Grid item xs={6}>
          <CreateEvent />
          <EventList />
        </Grid>
      </Grid>
    );
  }
}

StoryEventView.propTypes = {
  match: PropTypes.object,
  history: PropTypes.object,
  setCurrentStoryID: PropTypes.func
};

const mapStateToProps = reduxState => ({
  domainID: reduxState.domains.currentDomain
    ? reduxState.domains.currentDomain._id
    : undefined
});

const mapDispatchToProps = dispatch => ({
  setCurrentStoryID: (id, onSuccess = null, onFailure = null) => {
    dispatch(actionSetCurrentStoryID(id, onSuccess, onFailure));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoryEventView);
