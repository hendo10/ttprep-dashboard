import React, {Component} from 'react'
import {connect} from 'react-redux'

import {
  getStudentInfo,
  getStudentExam,
  getStudentExamDetails,
  getMathExamDetails,
  getReadingExamDetails,
  getWritingExamDetails
} from '../../store/summaryReducer'

import StudentInfo from './cards/StudentInfoCard'
import StudentExam from './cards/StudentExam'
import StudentMathDetails from './cards/StudentMathDetails'
import StudentReadingDetails from './cards/StudentReadingDetails'
import StudentWritingDetails from './cards/StudentWritingDetails'
import {Grid, Divider} from '@material-ui/core'
import AverageExamScore from './cards/AverageExamScore'
import AverageMathScore from './cards/AverageMathScore'
import AverageRWScore from './cards/AverageRWScore'
import TotalMathScore from './cards/TotalMathScore'
import TotalReadingScore from './cards/TotalReadingScore'
import TotalWritingScore from './cards/TotalWritingScore'

class StudentSummary extends Component {
  constructor() {
    super()
    // this.updateSectionDetails = this.updatedSectionDetails.bind(this)
  }

  async componentDidMount() {
    let userId = this.props.user.id

    await this.props.loadStudentInfo(userId)
    await this.props.loadStudentExam(userId)
    // await this.props.loadStudentExamDetails(userId,1)
    await this.props.loadMathExamDetails(userId, 1)
    await this.props.loadReadingExamDetails(userId, 1)
    await this.props.loadWritingExamDetails(userId, 1)
  }

  // async updateSectionDetails() {
  // let userId = this.props.user.id
  // await this.props.loadMathExamDetails(userId, this.props.StudentExam.id)
  // this.props.loadReadingExamDetails(userId, this.props.StudentExam.id),
  // this.props.loadWritingExamDetails(userId, this.props.StudentExam.id)
  // }

  render() {
    return (
      <div className="summary-page-container">
        {this.props.studentInfo[0] ? (
          <div className="graphs-card-container">
            <AverageExamScore studentExam={this.props.studentExam} />
            <AverageRWScore studentExam={this.props.studentExam} />
            <AverageMathScore studentExam={this.props.studentExam} />
            {/* <Grid item lg={3} sm={6} xl={3} xs={12}>
                <StudentInfo studentInfo={this.props.studentInfo[0]} />
              </Grid> */}
          </div>
        ) : null}
        <br />

        {this.props.studentInfo[0] ? (
          <div className="card-container">
            <StudentExam studentExam={this.props.studentExam} />
          </div>
        ) : null}

        {this.props.studentInfo[0] ? (
          <div className="totalscore-card-container">
            <TotalReadingScore
              readingExamDetails={this.props.readingExamDetails}
            />
            <br />
            <TotalWritingScore
              writingExamDetails={this.props.writingExamDetails}
            />
            <br />
            <TotalMathScore mathExamDetails={this.props.mathExamDetails} />
          </div>
        ) : null}

        {/* <Divider /> */}
        {this.props.studentInfo[0] ? (
          <div className="card-container">
            <StudentReadingDetails
              studentExam={this.props.studentExam}
              readingExamDetails={this.props.readingExamDetails}
            />
            <br />
            <StudentWritingDetails
              studentExam={this.props.studentExam}
              writingExamDetails={this.props.writingExamDetails}
            />
            <br />
            <StudentMathDetails
              studentExam={this.props.studentExam}
              mathExamDetails={this.props.mathExamDetails}
            />
          </div>
        ) : null}
      </div>
    )
  }
}

/**
 * CONTAINER
 */

const mapStateToProps = state => {
  const {
    studentInfo,
    studentExam,
    studentExamDetails,
    mathExamDetails,
    readingExamDetails,
    writingExamDetails
  } = state.summary
  return {
    user: state.user,
    studentInfo,
    studentExam,
    studentExamDetails,
    mathExamDetails,
    readingExamDetails,
    writingExamDetails
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadStudentInfo: userId => dispatch(getStudentInfo(userId)),
    loadStudentExam: userId => dispatch(getStudentExam(userId)),
    loadStudentExamDetails: (userId, examId) =>
      dispatch(getStudentExamDetails(userId, examId)),
    loadMathExamDetails: (userId, examId) =>
      dispatch(getMathExamDetails(userId, examId)),
    loadReadingExamDetails: (userId, examId) =>
      dispatch(getReadingExamDetails(userId, examId)),
    loadWritingExamDetails: (userId, examId) =>
      dispatch(getWritingExamDetails(userId, examId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentSummary)
