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
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

import { createDomain as actionCreateDomain } from 'Redux/domains/actions';
import { domainSchema } from 'Data/models/Schemas';

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
  state = {
    open: false,
    DomainName: undefined
  };

  handleSelectDomain = e => {
    const { history } = this.props;
    history.push(`/domain/${e.target.value}`);
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.domainName !== '') {
      const { createDomain } = this.props;
      const domain = domainSchema(this.props.currentAgentID, this.state.domainName);
      createDomain(domain);
    }
    this.setState({ open: false });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render () {
    const { classes, domains, currentDomainID } = this.props;
    return (
      <div className={classes.root}>
        <TextField
          disabled={domains.length === 0}
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
        {/* <NavLink
          to={`/domains/create`}
          style={{
            textDecoration: 'none'
          }}
        > */}
        <ListItem button>
          <ListItemIcon>
            <Queue />
          </ListItemIcon>
          <ListItemText onClick={this.handleOpen}>Create domain</ListItemText>
        </ListItem>
        <Dialog
          fullWidth
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Create a new domain</DialogTitle>
          <DialogContent>
            <DialogContentText>
              placeholder for discription
            </DialogContentText>
            <TextField
              autoFocus
              value={this.state.domainName}
              margin="dense"
              name="domainName"
              label="Domain Name"
              type="text"
              fullWidth
              required
              error={this.state.domainName === ''}
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
        {/* </NavLink> */}
      </div>
    );
  }
}

const mapStateToProps = function (state) {
  return {
    domains: state.domains.domainList,
    currentDomainID: state.domains.currentDomain
      ? state.domains.currentDomain._id
      : undefined,
    currentAgentID: state.agents.currentAgent._id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createDomain: (domainSchema) => {
      dispatch(actionCreateDomain(domainSchema));
    }
  };
};

DomainNav.propTypes = {
  classes: PropTypes.object.isRequired,
  domains: PropTypes.array,
  setAgent: PropTypes.func,
  history: PropTypes.object,
  currentDomainID: PropTypes.string,
  currentAgentID: PropTypes.string,
  createDomain: PropTypes.func
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(withStyles(styles, { withTheme: true })(DomainNav))
);
