import React from "react";
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
import logo from "../../assets/images/logo-ny.svg";

const styles = theme => ({
  root: {
    display: "flex"
  },
  drawer: {
    width: DRAWER_WIDTH,
    flexShrink: 0
  },
  drawerPaper: {
    width: DRAWER_WIDTH
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3
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
      alignItems="center"
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
        <Typography align="center" variant="title">
          Parrot
        </Typography>
      </Grid>
    </Grid>
  );
};

const LeftNav = props => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Header />
        <Divider />
        <List alignItems="center">
          <NavList />
        </List>
      </Drawer>
    </div>
  );
};

LeftNav.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LeftNav);
