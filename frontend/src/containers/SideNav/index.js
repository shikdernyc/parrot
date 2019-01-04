import React, {Component} from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import { NavLink } from "react-router-dom";
import { DRAWER_WIDTH } from "../../constants/app";
import Hidden from '@material-ui/core/Hidden';
import logo from "../../assets/images/logo-ny.svg";

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
    <ListItem button key={key + item}>
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <NavLink
        to={item.link}
        style={{
          textDecoration: "none"
        }}
      >
        <ListItemText>{item.title}</ListItemText>
      </NavLink>
    </ListItem>
  ));
};

const Header = props => {
  // const { classes } = props;
  const styles = {
    card: {
      maxWidth: 230,
      marginBottom: 20
    },
    media: {
      // ⚠️ object-fit is not supported by IE 11.
      objectFit: "contain"
    },
    main: {
      marginBottom: "20px"
    }
  };

  return (
    <Grid
      container
      justify="center"
      direction="column"
      style={styles.main}
    >
      <Grid item>
        {/* TODO: Add Logo */}
        <Card style={styles.card}>
          <CardActionArea>
            <NavLink to="/">
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                style={styles.media}
                height="50"
                image={logo}
                title="Contemplative Reptile"
              />
            </NavLink>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item>
        <Typography align="center" variant="h6">
          Parrot
        </Typography>
      </Grid>
    </Grid>
  );
};

class SideNav extends React.Component {
  state = {
    mobileOpen: false
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {
    const { classes, theme } = this.props;
    console.log(this.props);

    const drawer = (
      <div>
        {/* <div className={classes.toolbar} /> */}
        <Header />
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
              open={this.state.mobileOpen}
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

SideNav.propTypes = {
  classes: PropTypes.object.isRequired,
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  container: PropTypes.object,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(SideNav);
