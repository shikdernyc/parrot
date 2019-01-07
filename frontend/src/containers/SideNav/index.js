import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import { NavLink } from "react-router-dom";
import { DRAWER_WIDTH } from "../../constants/app";
import Hidden from "@material-ui/core/Hidden";
import { connect } from "react-redux";
import { setSideBarIsOpen } from "../../redux/navs/action";

const styles = theme => ({
  root: {
    display: "flex"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: DRAWER_WIDTH,
      flexShrink: 0
    }
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: DRAWER_WIDTH
  }
});

const NavList = props => {
  let navLinkMapping = [
    { title: "Domains", link: "/domains" },
    { title: "Intents", link: "/intents" },
    { title: "Entitys", link: "/entities" }
  ];

  return navLinkMapping.map((item, key) => (
    <NavLink
      to={item.link}
      style={{
        textDecoration: "none"
      }}
    >
      <ListItem button key={key + item}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText>{item.title}</ListItemText>
      </ListItem>
    </NavLink>
  ));
};

class SideNav extends React.Component {
  state = {
    mobileOpen: false
  };

  handleDrawerToggle = () => {
    const { isOpen, setIsOpen } = this.props;
    setIsOpen(!isOpen);
  };

  render() {
    const { classes, theme } = this.props;
    console.log(this.props);

    const drawer = (
      <div>
        <div className={classes.toolbar} />
        <Divider />
        <List>
          <NavList />
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
              anchor={theme.direction === "rtl" ? "right" : "left"}
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
    isOpen: reduxState.navs.sideBarIsOpen
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
  theme: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles, { withTheme: true })(SideNav));
