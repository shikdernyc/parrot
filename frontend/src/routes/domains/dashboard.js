import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

import SimpleCard from 'Components/card';

class Dashboard extends Component {
  render () {
    const currentDomain = this.props.currentDomain;
    return (
      <Fragment>
        {Object.keys(currentDomain).length
          ? (
            <div>
              <h2>{currentDomain.domainName}</h2>
              <Grid item xs={12}>
                <Grid container justify="flex-start" spacing={40}>
                  <Grid item>
                    <Link to={`/domain/${currentDomain._id}/stories`}>
                      <SimpleCard title='Story' content={currentDomain.stories.length.toString()} />
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link to={`/domain/${currentDomain._id}/intents`}>
                      <SimpleCard title='Intent' content={currentDomain.intents.length.toString()} />
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link to={`/domain/${currentDomain._id}/actions`}>
                      <SimpleCard title='Action' content={currentDomain.actions.length.toString()} />
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
            </div>
          )
          : <h2>Select a valid domain</h2>
        }
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => (
  {
    currentDomain: state.domains.currentDomain
  }
);

Dashboard.propTypes = {
  currentDomain: PropTypes.object
};

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(Dashboard);
