import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Hidden from '@material-ui/core/Hidden';
import { connect } from 'react-redux';
import { DRAWER_WIDTH } from 'Constants/app';
import { setSideBarIsOpen } from 'Redux/navs/action';
import ListNavs from './ListNavs';
import DomainNav from './DomainNav';
// import Header from './header';
import logo from 'Assets/images/logo-ny.svg';

const styles = theme => ({
  root: {
    display: 'flex'
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: DRAWER_WIDTH,
      flexShrink: 0
    }
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  toolbar: {
    ...theme.mixins.toolbar,
    backgroundImage: `url(${logo})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    height: '100%',
    margin: '5px'
  },
  drawerPaper: {
    width: DRAWER_WIDTH
  }
});

class SideNav extends React.Component {
  state = {
    mobileOpen: false
  };

  handleDrawerToggle = () => {
    const { isOpen, setIsOpen } = this.props;
    setIsOpen(!isOpen);
  };

  render () {
    const { classes, theme, currentAgentId } = this.props;

    const drawer = (
      <div>
        <div className={classes.toolbar} />
        {/* <Header /> */}
        {/* </div> */}
        <Divider />
        <List>
          {/* <AgentNav currentAgentId={currentAgentId} /> */}
          <DomainNav />
          {currentAgentId && (
            <Fragment>
              <Divider />
              <ListNavs currentAgentId={currentAgentId} />
            </Fragment>
          )}
        </List>
        <Divider />
      </div>
    );

    return (
      <div className={classes.root}>
        <nav className={classes.drawer}>
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={this.props.container}
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={this.props.isOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    isOpen: reduxState.navs.sideBarIsOpen,
    currentAgentId: reduxState.agents.currentAgent._id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setIsOpen: isOpen => dispatch(setSideBarIsOpen(isOpen))
  };
};

SideNav.propTypes = {
  classes: PropTypes.object.isRequired,
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  container: PropTypes.object,
  theme: PropTypes.object.isRequired,
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func.isRequired,
  currentAgentId: PropTypes.string
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles, { withTheme: true })(SideNav));
