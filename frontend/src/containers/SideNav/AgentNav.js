import React, { Fragment, Component } from "react";
import { NavLink } from "react-router-dom";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Queue from "@material-ui/icons/Queue";
import {connect} from 'react-redux'

const styles = theme => ({
  root: {
    marginBottom: theme.spacing.unit * 1.3
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  textField: {
    display: "block",
    marginBottom: theme.spacing.unit
  }
});

class AgentNavs extends Component {
  state = {
    agentID: 0
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: [e.target.value]
    });
  };

  render() {
    const { classes, agents } = this.props;
    return (
      <div className={classes.root}>
        <TextField
          select
          fullWidth
          name="agentID"
          label="Agent"
          className={classes.textField}
          value={this.state.agentID}
          onChange={this.handleChange}
          SelectProps={{
            MenuProps: {
              className: classes.menu
            }
          }}
          // margin="normal"
          variant="outlined"
        >
          {agents.map(option => (
            <MenuItem key={option.id} value={option.id}>
              {option.name}
            </MenuItem>
          ))}
        </TextField>
        <NavLink
          to={`/agents/create`}
          style={{
            textDecoration: "none"
          }}
        >
          <ListItem button>
            <ListItemIcon>
              <Queue />
            </ListItemIcon>
            <ListItemText>Create</ListItemText>
          </ListItem>
        </NavLink>
      </div>
    );
  }
}

const mapStateToProps = function(reduxState){
  return {
    agents: reduxState.agents.agentList
  }
}

export default connect(mapStateToProps, null)(withStyles(styles, { withTheme: true })(AgentNavs));
