import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';

class RenameStoryDialog extends Component {
  state = {
    newName: ''
  };

  componentDidMount () {
    this.setState({ newName: this.props.storyName });
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render () {
    const { storyName, isOpen, onClose, onSave } = this.props;
    return (
      <Dialog
        open={isOpen}
        onClose={onClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Rename {storyName}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="newName"
            value={this.state.value}
            label="Enter new name"
            fullWidth
            onChange={this.handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={event => {
              onSave(this.state.newName);
            }}
            color="primary"
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

RenameStoryDialog.propTypes = {
  storyName: PropTypes.string,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  onSave: PropTypes.func
};

export default RenameStoryDialog;
