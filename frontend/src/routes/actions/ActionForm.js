import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import MenuItem from '@material-ui/core/MenuItem';
import SaveAlt from '@material-ui/icons/SaveAlt';
import DeleteForever from '@material-ui/icons/DeleteForever';

import ListInputWithDelete from 'Components/inputs/ListInputWithDelete';
import { StyledTextField } from 'Components/inputs/TextField';
import { StyledFab } from 'Components/buttons';
import { updateAction, deleteAction } from 'Redux/actions/actions';
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

class ActionForm extends Component {
  state = {
    name: '',
    // language: 'english',
    agentResponses: []
  };

  // componentDidUpdate (prevProps, prevState, snapshot) {
  //   this.setState({
  //     name: this.props.currentActionName
  //   });
  // }
  UNSAFE_componentWillReceiveProps (nextProps) {
    this.setState({
      name: nextProps.currentAction.actionName,
      agentResponses: nextProps.currentAction.agentResponses
    });
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { updateAction, currentAction } = this.props;
    const { name, agentResponses } = this.state;
    // const action = actionSchema(currentAction, name, agentResponses);
    updateAction({
      id: currentAction._id,
      actionName: name,
      agentResponses: agentResponses
    });
  };

  handleOnclick = event => {
    event.preventDefault();
    const { deleteAction, currentAction, history } = this.props;
    deleteAction(currentAction, history);
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
            label="Action Name"
            placeholder="Example: utter_greet"
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
            value={this.state.agentResponses}
            label="Agent Responses"
            placeholder="Example: Hey! My name is Lily, and I am an AI Assistant."
            onNewItem={item => {
              if (!this.state.agentResponses.includes(item)) {
              // create a new array with the new item at beginning of it.
                this.setState({
                  agentResponses: [item].concat(this.state.agentResponses)
                });
              }
            }}
            onDeleteItem={item => {
              let newArr = [...this.state.agentResponses];
              newArr.splice(newArr.indexOf(item), 1);
              this.setState({
                agentResponses: newArr
              });
            }}
          />
          <StyledFab type='submit' Icon={SaveAlt}>
            Update Action
          </StyledFab>
          <StyledFab type='button' Icon={DeleteForever} onClick={this.handleOnclick}>
            Delete Action
          </StyledFab>
        </form>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => (
  {
    // form_error: state.actions.form_error
    currentAction: state.actions.currentAction
  }
);

const mapDispatchToProps = dispatch => {
  return {
    updateAction: (action) => {
      dispatch(updateAction(action));
    },
    deleteAction: (action, history) => {
      dispatch(deleteAction(action, history));
    }
  };
};

ActionForm.propTypes = {
  updateAction: PropTypes.func,
  history: PropTypes.object,
  currentAction: PropTypes.object,
  deleteAction: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActionForm);
