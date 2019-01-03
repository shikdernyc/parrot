import React from "react";
// import PropTypes from 'prop-types';
import SideNav from "./SideNav/index";
import TopNav from "./TopNav/Index";
import { CssBaseline } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import {DRAWER_WIDTH} from '../constants/app'
import MainApp from '../routes'

const styles = theme => ({
  content: {
    marginLeft: DRAWER_WIDTH,
    marginTop: 64,
    flexGrow: 1,
    padding: theme.spacing.unit * 3
  }
});

class App extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <CssBaseline />
        <SideNav />
        <TopNav />
        <main className={classes.content}>
          <MainApp />
        </main>
      </div>
    );
  }
}

export default withStyles(styles)(App);
