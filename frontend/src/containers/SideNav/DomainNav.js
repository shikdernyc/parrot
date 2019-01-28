import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink, withRouter, Link } from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Queue from '@material-ui/icons/Queue';
import { connect } from 'react-redux';

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
class DomainNav extends Component {
  handleSelectDomain = e => {
    const { history, currentAgentID } = this.props;
    history.push(`/agent/${currentAgentID}/domain/${e.target.value}`);
  };

  render () {
    const { classes, domains, currentDomainID } = this.props;
    return (
      <div className={classes.root}>
        <TextField
          select
          fullWidth
          name="domainID"
          label="Domains"
          className={classes.textField}
          value={currentDomainID || -1}
          SelectProps={{
            MenuProps: {
              className: classes.menu
            }
          }}
          onChange={this.handleSelectDomain}
          variant="outlined"
        >
          {domains.map(option => (
            <MenuItem key={option._id} value={option._id}>
              {option.domainName}
            </MenuItem>
          ))}
        </TextField>
        <NavLink
          to={`/domains/create`}
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

const mapStateToProps = function (state) {
  console.log(state);
  return {
    domains: state.domains.domainList,
    currentDomainID: state.domains.currentDomain
      ? state.domains.currentDomain._id
      : undefined,
    currentAgentID: state.agents.currentAgent._id
  };
};

DomainNav.propTypes = {
  classes: PropTypes.object.isRequired,
  domains: PropTypes.array,
  setAgent: PropTypes.func,
  history: PropTypes.object,
  currentDomainID: PropTypes.string,
  currentAgentID: PropTypes.string
};

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(withStyles(styles, { withTheme: true })(DomainNav))
);
