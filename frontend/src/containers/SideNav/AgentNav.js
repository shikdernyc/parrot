import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Queue from '@material-ui/icons/Queue';
import { connect } from 'react-redux';
import { setCurrentAgent } from 'Redux/agents/actions';

const styles = theme => ({
  root: {
    marginBottom: theme.spacing.unit * 1.3
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  textField: {
    display: 'block',
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

  handleChangeAgent = e => {
    this.handleChange(e);
    this.props.setAgent(this.props.history, e.target.value);
  };

  render () {
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
          onChange={this.handleChangeAgent}
          SelectProps={{
            MenuProps: {
              className: classes.menu
            }
          }}
          // margin="normal"
          variant="outlined"
        >
          {agents.map(option => (
            <MenuItem key={option._id} value={option._id}>
              {option.agentName}
            </MenuItem>
          ))}
        </TextField>
        <NavLink
          to={`/agents/create`}
          style={{
            textDecoration: 'none'
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

const mapStateToProps = function (reduxState) {
  return {
    agents: reduxState.agents.agentList
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    setAgent: function (history, id) {
      dispatch(setCurrentAgent(history, id));
    }
  };
};

AgentNavs.propTypes = {
  classes: PropTypes.object.isRequired,
  agents: PropTypes.array,
  setAgent: PropTypes.func,
  history: PropTypes.object
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(withStyles(styles, { withTheme: true })(AgentNavs))
);
