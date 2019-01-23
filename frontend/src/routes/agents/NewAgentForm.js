import React, { Component, Fragment } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import ListInputWithDelete from 'Components/inputs/ListInputWithDelete';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Typography from '@material-ui/core/Typography';
import { StyledTextField, StyledMenuSelect } from 'Components/inputs/TextField';
import { StyledFab } from 'Components/buttons';
import { createAgent as actionCreateAgent } from 'Redux/agents/actions';
import { agentSchema } from 'Data/models/Schemas';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const languages = [
  {
    value: 'english',
    label: 'English'
  }
  // {
  //   value: 'cantonese',
  //   label: 'Cantonese'
  // },
  // {
  //   value: 'french',
  //   label: 'French'
  // }
];

class NewAgentForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      language: 'english',
      fallbackResponse: []
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { history, createAgent } = this.props;
    const { name, description, language, fallbackResponse } = this.state;
    const agent = agentSchema(name, description, language, fallbackResponse);
    createAgent(history, agent);
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
            label="Agent Name"
            placeholder="Type your agent's name"
            fullWidth
            required
            onChange={this.handleChange}
          />
          <StyledTextField
            name="description"
            value={this.state.description}
            label="Agent Description"
            placeholder="What does your agent do?"
            fullWidth
            required
            onChange={this.handleChange}
          />
          <StyledMenuSelect
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
          </StyledMenuSelect>
          <ListInputWithDelete
            value={this.state.fallbackResponse}
            label="Fallback Response"
            placeholder="Example: Sorry, I didn't get that."
            onNewItem={item => {
              if (!this.state.fallbackResponse.includes(item)) {
              // create a new array with the new item at beginning of it.
                this.setState({
                  fallbackResponse: [item].concat(this.state.fallbackResponse)
                });
              }
            }}
            onDeleteItem={item => {
              let newArr = [...this.state.fallbackResponse];
              newArr.splice(newArr.indexOf(item), 1);
              this.setState({
                fallbackResponse: newArr
              });
            }}
          />
          <StyledFab type='submit' Icon={SaveAlt}>
          Create Agent
          </StyledFab>
        </form>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => (
  {
    form_error: state.agents.form_error
  }
);

const mapDispatchToProps = dispatch => {
  return {
    createAgent: (history, agentSchema) => {
      dispatch(actionCreateAgent(history, agentSchema));
    }
  };
};

NewAgentForm.propTypes = {
  createAgent: PropTypes.func,
  history: PropTypes.object,
  form_error: PropTypes.object
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewAgentForm);
