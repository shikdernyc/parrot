import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";
import AutosizerTable from "../../../components/table/AutosizerTable";
import { setTopNavProps } from "../../../redux/navs/action";

class IntentTable extends Component {
  componentWillMount() {
    this.props.setNavButton();
  }
  render() {
    let { classes, rows } = this.props;
    return (
      <Fragment>
        <Paper className={classes.root}>
          <AutosizerTable
            rowCount={rows.length}
            rowGetter={({ index }) => rows[index]}
            onRowClick={event => {
              this.props.history.push(`/intents/${event.rowData.id}`);
            }}
            columns={[
              {
                width: 250,
                flexGrow: 1.0,
                label: "Intent Name",
                dataKey: "name"
              },
              {
                width: 250,
                label: "Domain",
                dataKey: "domain"
              },
              {
                width: 250,
                label: "Examples",
                dataKey: "examples"
              }
            ]}
          />
        </Paper>
      </Fragment>
    );
  }
}

const mapStateToProps = function(reduxState) {
  return {
    rows: reduxState.intents.intentList
  };
};

const mapDispatchToProps = function(dispatch) {
  return {
    setNavButton: function(
      buttonText = "Create Intent",
      buttonLink = "/intents/create"
    ) {
      dispatch(
        setTopNavProps({
          buttonText,
          buttonLink
        })
      );
    }
  };
};

const styles = theme => ({
  root: {
    width: "100%",
    height: window.innerHeight * 0.65,
    marginTop: theme.spacing.unit * 3
  }
});

IntentTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(IntentTable));
