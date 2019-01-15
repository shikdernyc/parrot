import React from 'react';
import PropTypes from 'prop-types';
import SideNav from './SideNav/index';
import TopNav from './TopNav';
import { withStyles } from '@material-ui/core/styles';
import { DRAWER_WIDTH } from 'Constants/app';
import MainApp from 'Routes';
import withRoot from '../withRoot';
import { connect } from 'react-redux';
import { getAllAgents } from 'Redux/agents/actions';

const styles = theme => ({
  content: {
    marginLeft: DRAWER_WIDTH,
    marginTop: 64,
    flexGrow: 1,
    padding: theme.spacing.unit * 3
  }
});

class App extends React.Component {
  componentWillMount () {
    const { populateAgentList } = this.props;
    populateAgentList();
  }

  render () {
    const { classes } = this.props;
    return (
      <div>
        <SideNav />
        <TopNav />
        <main className={classes.content}>
          <MainApp />
        </main>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    populateAgentList: () => {
      dispatch(getAllAgents());
    }
  };
};

App.propTypes = {
  classes: PropTypes.object.isRequired,
  populateAgentList: PropTypes.func
};

export default connect(
  null,
  mapDispatchToProps
)(withRoot(withStyles(styles)(App)));
