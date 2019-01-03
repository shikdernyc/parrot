import React, { Component } from "react";
import { Route, withRouter, Switch, Redirect } from "react-router-dom";
import domains from './domains'
import root from './root'


class MainApp extends Component {
  render() {
    const { match } = this.props;
    console.log(`Match: ${match.url}`)
    return (
      <main>
        <Switch>
          <Route path={`/domains`} component={domains} />
          <Route path={`/intents`} component={domains} />
          <Route path={`/entities`} component={domains} />
          <Route exact path={`/`} component={root} />
          <Redirect to="/error/404" />
        </Switch>
      </main>
    );
  }
}

export default withRouter(MainApp)
