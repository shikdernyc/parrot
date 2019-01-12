import React, { Component } from 'react';
import { StyledTextField, StyledMenuSelect } from 'Components/inputs/TextField';
import { StyledFab } from 'Components/buttons';
import SaveAlt from '@material-ui/icons/SaveAlt';
import ListInputWithDelete from 'Components/inputs/ListInputWithDelete';
import PropTypes from 'prop-types';
import { MenuItem, Grid } from '@material-ui/core';
import { connect } from 'react-redux';

class Create extends Component {
  constructor (props) {
    super(props);
    this.state = {
      domainId: 1,
      intentName: '',
      userSays: [],
      agentResponse: []
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render () {
    const { domainList } = this.props;
    console.log(this.state.domainId);
    return (
      <form>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={9}>
            <StyledTextField
              fullWidth
              name="intentName"
              label="Intent Name"
              placeholder="Type in your intent name here"
              helperText={`Intent name cannot contain space. You can use '.' or'_' between words.\n
                        eg. greeting, venue_recommend`}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <StyledMenuSelect
              fullWidth
              name="domainId"
              label="Domain"
              helperText="Please select a domain"
              value={this.state.domainId}
              onChange={this.handleChange}
            >
              {domainList.map(item => (
                <MenuItem key={item.id} value={item.id}>
                  {item.domainName}
                </MenuItem>
              ))}
            </StyledMenuSelect>
          </Grid>
          <Grid item xs={12} sm={12}>
            <ListInputWithDelete
              value={this.state.userSays}
              label="User Responses"
              exampleText="What can you do?"
              placeholder="Type a sample dialogue and press enter"
              onNewItem={item => {
                this.setState({
                  userSays: [item, ...this.state.userSays]
                });
              }}
              onDeleteItem={item => {
                let newArr = [...this.state.userSays];
                newArr.splice(newArr.indexOf(item), 1);
                this.setState({
                  userSays: newArr
                });
              }}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <ListInputWithDelete
              value={this.state.agentResponse}
              label="Agent Responses"
              placeholder="Type an agent response and press Enter"
              exampleText="The weather is great outside"
              onNewItem={item => {
                this.setState({
                  agentResponse: [item, ...this.state.agentResponse]
                });
              }}
              onDeleteItem={item => {
                let newArr = [...this.state.agentResponse];
                newArr.splice(newArr.indexOf(item), 1);
                this.setState({
                  agentResponse: newArr
                });
              }}
            />
          </Grid>
        </Grid>
        <StyledFab Icon={SaveAlt}>Create Agent</StyledFab>
      </form>
    );
  }
}

const mapStateToProps = reduxState => ({
  domainList: reduxState.domains.domainList
});

Create.propTypes = {
  domainList: PropTypes.array.isRequired
};

export default connect(
  mapStateToProps,
  null
)(Create);
