import React, { Component } from 'react';
import Base from './base';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import { AddCircleOutline } from '@material-ui/icons';
import AddCircleOutline from '@material-ui/icons/AddCircleOutline';
import IconButton from '@material-ui/core/IconButton';
import { Typography, MenuItem, TextField } from '@material-ui/core';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const styles = theme => {
  console.log(theme);
  return {
    root: {
      flexGrow: 1
    },
    breadcrumb: {
      marginLeft: -12,
      marginRight: 20
    },
    grow: {
      flexGrow: 1
    },
    agentSelection: {
      display: 'flex'
    },
    agentSelectMenu: {
      paddingLeft: theme.spacing.unit * 3,
      paddingRight: theme.spacing.unit * 3,
      background: theme.palette.grey[800],
      borderRadius: '25px',
      color: 'white'
    },
    agentSelectItem: {
      textColor: theme.palette.secondary.main
    }
  };
};

class BreadCrumbAndButton extends Component {
  handleSelectAgent = e => {
    const agentID = e.target.value;
    if (agentID !== -1) {
      this.props.history.push(`/agent/${agentID}`);
    }
  };

  render () {
    const { classes, title, agentList, currentAgentId } = this.props;
    return (
      <Base>
        <Typography
          className={classes.title}
          variant="h6"
          color="inherit"
          noWrap
        >
          {title}
        </Typography>
        <div className={classes.grow} />
        <div className={classes.agentSelection}>
          <IconButton color="secondary">
            <AddCircleOutline />
          </IconButton>
          <TextField
            select
            fullWidth
            margin="normal"
            name="agentID"
            value={currentAgentId || -1}
            onChange={this.handleSelectAgent}
            className={classes.agentSelectMenu}
          >
            <MenuItem value={-1} className={classes.agentSelectItem}>
              None
            </MenuItem>
            {agentList.map(item => (
              <MenuItem
                key={item._id}
                className={classes.agentSelectItem}
                value={item._id}
              >
                {item.agentName}
              </MenuItem>
            ))}
          </TextField>
        </div>
      </Base>
    );
  }
}

BreadCrumbAndButton.propTypes = {
  classes: PropTypes.object.isRequired,
  agentList: PropTypes.array,
  title: PropTypes.string,
  history: PropTypes.object,
  currentAgentId: PropTypes.string
};

const mapStateToProps = reduxState => {
  return {
    agentList: reduxState.agents.agentList.map(({ _id, agentName }) => ({
      _id,
      agentName
    })),
    currentAgentId: reduxState.agents.currentAgent._id,
    title: reduxState.navs.topNavTitle
  };
};

export default withRouter(
  withStyles(styles, { withTheme: true })(
    connect(
      mapStateToProps,
      null
    )(BreadCrumbAndButton)
  )
);
