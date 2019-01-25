import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import AutosizerTable from 'Components/table/AutosizerTable';
import { setTopNavProps } from 'Redux/navs/action';

class IntentTable extends Component {
  componentDidMount () {
    this.props.setNavButton();
  }

  componentWillUnmount () {
    this.props.setNavButton('', '');
  }

  render () {
    const { classes, intentList } = this.props;
    return (
      <Fragment>
        <Paper className={classes.root}>
          <AutosizerTable
            rowCount={intentList.length}
            rowGetter={({ index }) => intentList[index]}
            onRowClick={event => {
              this.props.history.push(`/intents/${event.rowData.id}`);
            }}
            columns={[
              {
                width: 250,
                flexGrow: 1.0,
                label: 'Intent Name',
                dataKey: 'intentName'
              },
              {
                width: 250,
                label: 'Domain',
                dataKey: 'domainID'
              },
              {
                width: 250,
                label: 'Examples',
                dataKey: 'examples'
              }
            ]}
          />
        </Paper>
      </Fragment>
    );
  }
}

const mapStateToProps = function (reduxState) {
  return {
    intentList: reduxState.intents.intentList.map(
      ({ intentName, domainID, userSays }) => ({
        intentName,
        domainID,
        examples: userSays.length
      })
    ),
    domainList: reduxState.domains.domainList
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    setNavButton: function (
      buttonText = 'Create Intent',
      buttonLink = 'intents/create'
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
    width: '100%',
    height: window.innerHeight * 0.65,
    marginTop: theme.spacing.unit * 3
  }
});

IntentTable.propTypes = {
  classes: PropTypes.object.isRequired,
  intentList: PropTypes.array,
  setNavButton: PropTypes.func,
  history: PropTypes.object
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(IntentTable));
