import React from "react";
import logo from "Assets/images/logo-ny.svg";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import { withStyles } from "@material-ui/core";
import {NavLink} from 'react-router-dom'

const styles = theme => ({
  card: {
    // objectFit: "fit"
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit 
  },
  media: {
    height: 64,
    objectFit: "fit"
  }
});

const Header = props => {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <NavLink to="/">
      <CardActionArea>
        <CardMedia component="img" className={classes.media} image={logo} />
      </CardActionArea>
      </NavLink>
    </Card>
  );
};

export default withStyles(styles, { withTheme: true })(Header);
