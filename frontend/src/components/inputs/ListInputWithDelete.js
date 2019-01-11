import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import TextField from '@material-ui/core/TextField';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = theme => ({
  list: {
    marginLeft: theme.spacing.unit * 1.5,
    marginRight: theme.spacing.unit * 1.5
  },
  listItem: {},
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  }
});

class ListInput extends Component {
  constructor (props) {
    super(props);
    this.state = {
      newItem: ''
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleKeyPress = e => {
    if (e.key === 'Enter') {
      this.props.onNewItem(this.state.newItem);
      this.setState({
        newItem: ''
      });
    }
  };

  handleDelete = item => {
    this.props.onDeleteItem(item);
  };

  render () {
    const { classes, value, label, placeholder } = this.props;
    // console.log(value);
    let items = [];

    // if (typeof value[Symbol.iterator] === 'function') {
    for (let item of value) {
      // console.log(`item: ${item}`)
      items.push(
        <ListItem button divider key={item} className={classes.listItem}>
          <ListItemText primary={item} />
          <ListItemSecondaryAction>
            <IconButton
              aria-label="Delete"
              onClick={() => {
                this.props.onDeleteItem(item);
              }}
            >
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      );
    }

    return (
      <Fragment>
        <TextField
          name="newItem"
          value={this.state.newItem}
          className={classes.textField}
          label={label || ''}
          placeholder={placeholder || ''}
          fullWidth
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true
          }}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <List className={classes.list}>{items}</List>
      </Fragment>
    );
  }
}

ListInput.propTypes = {
  classes: PropTypes.object,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.array.isRequired,
  onNewItem: PropTypes.func.isRequired,
  onDeleteItem: PropTypes.func.isRequired
};

export default withStyles(styles, { withTheme: true })(ListInput);
