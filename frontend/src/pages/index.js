import React from 'react';
// import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

import SideNav from '../containers/SideNav';

class App extends React.Component {

  render() {

    return (
      <div>
        <SideNav>
          <Typography paragraph>
            add forms
          </Typography>
        </SideNav>
      </div>
    );
  }
}

export default App;
