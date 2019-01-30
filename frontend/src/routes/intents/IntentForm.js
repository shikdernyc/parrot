import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import MenuItem from '@material-ui/core/MenuItem';
import SaveAlt from '@material-ui/icons/SaveAlt';
import DeleteForever from '@material-ui/icons/DeleteForever';

import ListInputWithDelete from 'Components/inputs/ListInputWithDelete';
import { StyledTextField } from 'Components/inputs/TextField';
import { StyledFab } from 'Components/buttons';
import { updateIntent, deleteIntent } from 'Redux/intents/actions';
// import { actionSchema } from 'Data/models/Schemas';

// const languages = [
//   {
//     value: 'english',
//     label: 'English'
//   }
//   // {
//   //   value: 'cantonese',
//   //   label: 'Cantonese'
//   // },
//   // {
//   //   value: 'french',
//   //   label: 'French'
//   // }
// ];

class IntentForm extends Component {
  state = {
    name: '',
    // language: 'english',
    userSays: []
  };

  // componentDidUpdate (prevProps, prevState, snapshot) {
  //   this.setState({
  //     name: this.props.currentActionName
  //   });
  // }
  UNSAFE_componentWillReceiveProps (nextProps) {
    this.setState({
      name: nextProps.currentIntent.intentName,
      userSays: nextProps.currentIntent.userSays
    });
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { updateIntent, currentIntent } = this.props;
    const { name, userSays } = this.state;
    // const action = actionSchema(currentAction, name, agentResponses);
    updateIntent({
      id: currentIntent._id,
      actionName: name,
      userSays: userSays
    });
  };

  handleOnclick = event => {
    event.preventDefault();
    const { deleteIntent, currentIntent, history } = this.props;
    deleteIntent(currentIntent, history);
  }

  render () {
    return (
      <Fragment>
        {/* {this.props.form_error &&
          <Typography variant="subtitle1" gutterBottom>
            {this.props.form_error.message}
          </Typography>
        } */}
        <form onSubmit={this.handleSubmit}>
          <StyledTextField
            name="name"
            value={this.state.name}
            label="Intent Name"
            placeholder="Example: greeting"
            fullWidth
            required
            onChange={this.handleChange}
          />
          {/* <StyledMenuSelect
            name="language"
            value={this.state.language}
            label="Language"
            helperText="Please select your agent's language"
            onChange={this.handleChange}
          >
            {languages.map((language, index) => (
              <MenuItem
                key={language.value}
                value={language.value}
                selected={index === 0}>
                {language.label}
              </MenuItem>
            ))}
          </StyledMenuSelect> */}
          <ListInputWithDelete
            value={this.state.userSays}
            label="Agent Responses"
            placeholder="Example: I'd like to book a flight."
            onNewItem={item => {
              if (!this.state.userSays.includes(item)) {
              // create a new array with the new item at beginning of it.
                this.setState({
                  userSays: [item].concat(this.state.userSays)
                });
              }
            }}
            onDeleteItem={item => {
              let newArr = [...this.state.userSays];
              newArr.splice(newArr.indexOf(item), 1);
              this.setState({
                userSays: newArr
              });
            }}
          />
          <StyledFab type='submit' Icon={SaveAlt}>
            Update Intent
          </StyledFab>
          <StyledFab type='button' Icon={DeleteForever} onClick={this.handleOnclick}>
            Delete Intent
          </StyledFab>
        </form>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => (
  {
    // form_error: state.actions.form_error
    currentIntent: state.intents.currentIntent
  }
);

const mapDispatchToProps = dispatch => {
  return {
    updateIntent: (intent) => {
      dispatch(updateIntent(intent));
    },
    deleteIntent: (intent, history) => {
      dispatch(deleteIntent(intent, history));
    }
  };
};

IntentForm.propTypes = {
  updateIntent: PropTypes.func,
  history: PropTypes.object,
  currentIntent: PropTypes.object,
  deleteIntent: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IntentForm);
