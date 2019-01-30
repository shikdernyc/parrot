import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import { AddCircleOutline } from '@material-ui/icons';
import AddCircleOutline from '@material-ui/icons/AddCircleOutline';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { Typography, MenuItem, TextField } from '@material-ui/core';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import Base from './base';
import { createAgent as actionCreateAgent } from 'Redux/agents/actions';
import { agentSchema } from 'Data/models/Schemas';

const styles = theme => {
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
  state = {
    open: false,
    agentName: undefined,
    agentDesc: undefined
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleSelectAgent = e => {
    const agentID = e.target.value;
    if (agentID !== -1) {
      this.props.history.push(`/agent/${agentID}`);
    }
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.agentName !== '' && this.state.agentDesc !== '') {
      const { history, createAgent } = this.props;
      const agent = agentSchema(this.state.agentName, this.state.agentDesc);
      createAgent(history, agent);
    }
    this.setState({ open: false });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
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
          <IconButton
            color="secondary"
            onClick={this.handleOpen}
          >
            <AddCircleOutline />
          </IconButton>
          <Dialog
            fullWidth
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">Create a new agent</DialogTitle>
            <DialogContent>
              <DialogContentText>
                placeholder for discription
              </DialogContentText>
              <TextField
                autoFocus
                value={this.state.agentName}
                margin="dense"
                name="agentName"
                label="Agent Name"
                type="text"
                fullWidth
                required
                error={this.state.agentName === ''}
                helperText='Cannot be empty'
                onChange={this.handleChange}
              />
              <TextField
                value={this.state.agentDesc}
                margin="dense"
                name="agentDesc"
                label="Agent Description"
                type="text"
                fullWidth
                required
                error={this.state.agentDesc === ''}
                helperText='Cannot be empty'
                onChange={this.handleChange}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={this.handleSubmit} color="primary">
                Create
              </Button>
            </DialogActions>
          </Dialog>

          <TextField
            select
            fullWidth
            margin="normal"
            name="agentID"
            value={currentAgentId || -1}
            onChange={this.handleSelectAgent}
            className={classes.agentSelectMenu}
          >
            {agentList &&
              agentList.map(item => (
                <MenuItem
                  key={item._id}
                  className={classes.agentSelectItem}
                  value={item._id}
                >
                  {item.agentName}
                </MenuItem>
              ))
            }
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
  currentAgentId: PropTypes.string,
  createAgent: PropTypes.func
};

const mapStateToProps = state => {
  return {
    agentList: state.agents.agentList.map(({ _id, agentName }) => ({
      _id,
      agentName
    })),
    currentAgentId: state.agents.currentAgent._id,
    title: state.navs.topNavTitle
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createAgent: (history, agentSchema) => {
      dispatch(actionCreateAgent(history, agentSchema));
    }
  };
};

export default withRouter(
  withStyles(styles, { withTheme: true })(
    connect(
      mapStateToProps,
      mapDispatchToProps
    )(BreadCrumbAndButton)
  )
);
