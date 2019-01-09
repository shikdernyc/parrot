import React, { Component } from 'react';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

class Create extends Component {
  constructor (props) {
    super(props);
    this.state = {
      domainID: 4,
      intentName: '',
      userSays: [],
      agentResponses: []
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render () {
    return (
      // <h1>Hi</h1>
      <form>
        <FormControl fullWidth>
          <InputLabel htmlFor="domainName">Domain Name</InputLabel>
          <Input
            name="domainID"
            id="domainName"
            value={this.state.domainID}
            onChange={this.handleChange}
          />
        </FormControl>
        <FormControl fullWidth>
          <InputLabel htmlFor="intentName">Intent Name</InputLabel>
          <Input
            name="intetName"
            id="intentName"
            value={this.state.intentName}
            onChange={this.handleChange}
          />
        </FormControl>
      </form>
    );
  }
}

export default Create;
