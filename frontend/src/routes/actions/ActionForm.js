import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Typography from '@material-ui/core/Typography';

import ListInputWithDelete from 'Components/inputs/ListInputWithDelete';
import { StyledTextField, StyledMenuSelect } from 'Components/inputs/TextField';
import { StyledFab } from 'Components/buttons';
import { createAction as actionCreateAction } from 'Redux/actions/actions';
import { actionSchema } from 'Data/models/Schemas';

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
  constructor (props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      // language: 'english',
      templates: [],
      agent_id: ''
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { history, createAction } = this.props;
    const { name, description, templates, agent_id } = this.state;
    const action = actionSchema(name, description, templates);
    console.log(action);
    createAction(history, action);
  };

  render () {
    return (
      <Fragment>
        {this.props.form_error &&
          <Typography variant="subtitle1" gutterBottom>
            {this.props.form_error.message}
          </Typography>
        }
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
          <StyledTextField
            name="description"
            value={this.state.description}
            label="Action Description"
            placeholder="What does this action do?"
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
            value={this.state.templates}
            label="Templates"
            placeholder="Example: Hey! My name is Lily, and I am an AI Assistant."
            onNewItem={item => {
              if (!this.state.templates.includes(item)) {
              // create a new array with the new item at beginning of it.
                this.setState({
                  templates: [item].concat(this.state.templates)
                });
              }
            }}
            onDeleteItem={item => {
              let newArr = [...this.state.templates];
              newArr.splice(newArr.indexOf(item), 1);
              this.setState({
                templates: newArr
              });
            }}
          />
          <StyledFab type='submit' Icon={SaveAlt}>
            Create Action
          </StyledFab>
        </form>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => (
  {
    form_error: state.actions.form_error
  }
);

const mapDispatchToProps = dispatch => {
  return {
    createAction: (history, actionSchema) => {
      dispatch(actionCreateAction(history, actionSchema));
    }
  };
};

ActionForm.propTypes = {
  createAction: PropTypes.func,
  history: PropTypes.object,
  form_error: PropTypes.object
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActionForm);
