import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import ListInputWithDelete from "Components/inputs/ListInputWithDelete";
import SaveAlt from "@material-ui/icons/SaveAlt";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  menu: {
    width: 200
  },
  icon: {
    marginRight: theme.spacing.unit
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  }
});

const languages = [
  {
    value: "english",
    label: "English"
  },
  {
    value: "cantonese",
    label: "Cantonese"
  },
  {
    value: "french",
    label: "French"
  }
];

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      language: "english",
      fallbackResponse: []
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <form>
        <TextField
          name="name"
          value={this.state.name}
          className={classes.textField}
          label="Agent Name"
          placeholder="Type your agent's name"
          fullWidth
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true
          }}
          onChange={this.handleChange}
        />
        <TextField
          name="description"
          value={this.state.description}
          className={classes.textField}
          label="Agent Description"
          placeholder="What does your agent do?"
          fullWidth
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true
          }}
          onChange={this.handleChange}
        />
        <TextField
          select
          name="language"
          helperText="Please select your agent's language"
          value={this.state.language}
          className={classes.textField}
          label="Language"
          // fullWidth
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true
          }}
          SelectProps={{
            MenuProps: {
              className: classes.menu
            }
          }}
          onChange={this.handleChange}
        >
          {languages.map(language => (
            <MenuItem key={language.value} value={language.value}>
              {language.label}
            </MenuItem>
          ))}
        </TextField>
        <ListInputWithDelete
          value={this.state.fallbackResponse}
          label="Fallback Response"
          placeholder="Example: Sorry, I didn't get that "
          onNewItem={item => {
            this.setState({
              fallbackResponse: [item, ...this.state.fallbackResponse]
            });
          }}
          onDeleteItem={item => {
            let newArr = [...this.state.fallbackResponse];
            newArr.splice(newArr.indexOf(item), 1);
            this.setState({
              fallbackResponse: newArr
            });
          }}
        />
        <Button variant="extendedFab" size="medium" color="secondary" className={classes.button}>
          <SaveAlt className={classes.icon} />
          Create Agent
        </Button>
      </form>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Create);
