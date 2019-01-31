import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';

import WrappedVirtualizedTable from 'Components/table/WrappedVirtualizedTable';
class Dashboard extends Component {
  render () {
    const domainList = this.props.domainList;
    const rows = [];
    for (let i in domainList) {
      let domain = domainList[i];
      rows.push({
        id: domain._id,
        domainName: domain.domainName,
        stories: domain.stories.length,
        intents: domain.intents.length,
        actions: domain.actions.length
      });
    }
    return (
      <Fragment>
        {domainList
          ? (
            <Paper style={{ height: 800, width: '100%' }}>
              <WrappedVirtualizedTable
                rowCount={rows.length}
                rowGetter={({ index }) => rows[index]}
                onRowClick={event => this.props.history.push(`/domain/${event.rowData.id}`)}
                columns={[
                  {
                    width: 200,
                    flexGrow: 2.0,
                    label: 'Domain',
                    dataKey: 'domainName'
                  },
                  {
                    width: 120,
                    flexGrow: 1.0,
                    label: 'Stories',
                    dataKey: 'stories',
                    numeric: true
                  },
                  {
                    width: 120,
                    flexGrow: 1.0,
                    label: 'Intents',
                    dataKey: 'intents',
                    numeric: true
                  },
                  {
                    width: 120,
                    flexGrow: 1.0,
                    label: 'Actions',
                    dataKey: 'actions',
                    numeric: true
                  }
                ]}
              />
            </Paper>
          )
          : <h2>{this.props.currentAgent.agentName}</h2>
        }
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => (
  {
    currentAgent: state.agents.currentAgent,
    domainList: state.domains.domainList
  }
);

// const mapDispatchToProps = dispatch => {
//   return {
//     createAgent: (history, agentSchema) => {
//       dispatch(actionCreateAgent(history, agentSchema));
//     }
//   };
// };

Dashboard.propTypes = {
  currentAgent: PropTypes.object,
  domainList: PropTypes.array,
  history: PropTypes.object
};

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(Dashboard);
