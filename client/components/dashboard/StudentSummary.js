import React, {Component} from 'react'
import {connect} from 'react-redux'
// import PeakTimeGraph from './PeakTimeGraph'
// import LineGraphRevenue from './LineGraphRevenue'
// import EnhancedTable from './DOWAnalysisTable'

import {
  // getDOWAnalysisTable,
  getStudentInfo
} from '../../store/summaryReducer'

// import StudentInfo from './dashboard/cards/StudentInfoCard'
import {Grid, Divider} from '@material-ui/core'

class StudentSummary extends Component {
  // constructor(props) {
  //   super(props)
  //   this.getTotalRevenue = this.getTotalRevenue.bind(this)
  // }

  async componentDidMount() {
    // this.props.loadDOWAnalysisTable()
    await this.props.loadStudentInfo(this.props.user.id)
  }

  render() {
    return (
      <div className="summary-page-container">
        {this.props.studentInfo[0] ? (
          <div className="card-container">
            <Grid container spacing={4}>
              <Grid item lg={3} sm={6} xl={3} xs={12}>
                Test
                {/* <StudentInfo studentInfo={this.props.studentInfo[0]} /> */}
              </Grid>

              {/* Card for course info
              <Grid item lg={3} sm={6} xl={3} xs={12}>
                <TotalRevenue
                  totalRevenue={this.getTotalRevenue(
                    this.props.revenueVsTime.oneYear.revenue
                  )}
                />
              </Grid> */}
            </Grid>
          </div>
        ) : null}
        <Divider />
        <div>
          To be updated
          {/* <CalendarContainer />
          <Divider />
        </div>
        <div className="summary-chart-container">
          <LineGraphRevenue />
          <PeakTimeGraph />
          <Divider />
        </div>
        <div className="summary-table-container">
          <EnhancedTable DOWAnalysisTable={this.props.DOWAnalysisTable} /> */}
        </div>
      </div>
    )
  }
}

/**
 * CONTAINER
 */

const mapStateToProps = state => {
  const {studentInfo} = state.summary
  return {
    studentInfo
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadStudentInfo: userId => dispatch(getStudentInfo(userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentSummary)
