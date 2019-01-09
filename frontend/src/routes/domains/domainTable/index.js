import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import AutosizerTable from 'Components/table/AutosizerTable';
import { setTopNavProps } from 'Redux/navs/action';

class DomainTable extends Component {
  componentDidMount () {
    this.props.setNavButton();
  }

  componentWillUnmount () {
    this.props.setNavButton('', '');
  }

  render () {
    let { classes, rows } = this.props;
    rows = rows.map(item => ({
      ...item,
      enabled: item.enabled ? 'Yes' : 'No'
    }));
    return (
      <Fragment>
        <Paper className={classes.root}>
          <AutosizerTable
            rowCount={rows.length}
            rowGetter={({ index }) => rows[index]}
            onRowClick={event => {
              this.props.history.push(`/domains/${event.rowData.id}`);
            }}
            columns={[
              {
                width: 300,
                flexGrow: 1.0,
                label: 'Domain Name',
                dataKey: 'domainName'
              },
              {
                width: 250,
                label: 'Enabled',
                dataKey: 'enabled'
              },
              {
                width: 250,
                label: 'Intent Threshold',
                dataKey: 'threshold'
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
    rows: reduxState.domains.domainList
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    setNavButton: function (
      buttonText = 'Create Domain',
      buttonLink = '/domains/create'
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

const domainTableStyles = theme => ({
  root: {
    width: '100%',
    height: window.innerHeight * 0.65,
    marginTop: theme.spacing.unit * 3
  }
});

DomainTable.propTypes = {
  classes: PropTypes.object.isRequired,
  rows: PropTypes.array,
  setNavButton: PropTypes.func,
  history: PropTypes.array
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(domainTableStyles)(DomainTable));
