import React from "react";
import SideNav from "./SideNav/index";
import TopNav from "./TopNav";
import { withStyles } from "@material-ui/core/styles";
import {DRAWER_WIDTH} from '../constants/app'
import MainApp from '../routes'
import withRoot from '../withRoot'

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
        <SideNav />
        <TopNav />
        <main className={classes.content}>
          <MainApp />
        </main>
      </div>
    );
  }
}

export default withRoot(withStyles(styles)(App));
