import axios from 'axios'
// import {act} from 'react-test-renderer'

/**
 * ACTION TYPES
 */
const GET_STUDENT_INFO = 'GET_STUDENT_INFO'
const GET_STUDENT_EXAM = 'GET_STUDENT_EXAM'
const GET_STUDENT_EXAM_DETAILS = 'GET_STUDENT_EXAM_DETAILS'
const GET_MATH_DETAILS = 'GET_MATH_DETAILS'
const GET_READING_DETAILS = 'GET_READING_DETAILS'
const GET_WRITING_DETAILS = 'GET_WRITING_DETAILS'

/**
 * INITIAL STATE
 */
const initialState = {
  studentInfo: {},
  studentExam: [],
  studentExamDetails: [],
  mathExamDetails: [],
  readingExamDetails: [],
  writingExamDetails: []
}

/**
 * ACTION CREATORS
 */

const gotStudentInfo = studentInfo => ({
  type: GET_STUDENT_INFO,
  studentInfo
})

const gotStudentExam = studentExam => ({
  type: GET_STUDENT_EXAM,
  studentExam
})

const gotStudentExamDetails = studentExamDetails => ({
  type: GET_STUDENT_EXAM_DETAILS,
  studentExamDetails
})

const gotMathDetails = mathExamDetails => ({
  type: GET_MATH_DETAILS,
  mathExamDetails
})

const gotReadingDetails = readingExamDetails => ({
  type: GET_READING_DETAILS,
  readingExamDetails
})

const gotWritingDetails = writingExamDetails => ({
  type: GET_WRITING_DETAILS,
  writingExamDetails
})

export const getStudentInfo = userId => async dispatch => {
  try {
    const {data} = await axios.get(`/api/users/${userId}`)
    dispatch(gotStudentInfo(data))
  } catch (error) {
    console.error(error)
  }
}

export const getStudentExam = userId => async dispatch => {
  try {
    const {data} = await axios.get(`/api/users/${userId}/exams`)
    dispatch(gotStudentExam(data))
  } catch (error) {
    console.error(error)
  }
}

export const getStudentExamDetails = (userId, examId) => async dispatch => {
  try {
    const {data} = await axios.get(`/api/users/${userId}/exams/${examId}`)
    dispatch(gotStudentExamDetails(data))
  } catch (error) {
    console.error(error)
  }
}

export const getMathExamDetails = (userId, examId) => async dispatch => {
  try {
    const {data} = await axios.get(`/api/users/${userId}/exams/${examId}/math`)
    dispatch(gotMathDetails(data))
  } catch (error) {
    console.error(error)
  }
}

export const getReadingExamDetails = (userId, examId) => async dispatch => {
  try {
    const {data} = await axios.get(
      `/api/users/${userId}/exams/${examId}/reading`
    )
    dispatch(gotReadingDetails(data))
  } catch (error) {
    console.error(error)
  }
}

export const getWritingExamDetails = (userId, examId) => async dispatch => {
  try {
    const {data} = await axios.get(
      `/api/users/${userId}/exams/${examId}/writing`
    )
    dispatch(gotWritingDetails(data))
  } catch (error) {
    console.error(error)
  }
}

/**
 * REDUCER
 */
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_STUDENT_INFO:
      return {
        ...state,
        studentInfo: action.studentInfo
      }
    case GET_STUDENT_EXAM:
      return {
        ...state,
        studentExam: action.studentExam
      }
    case GET_STUDENT_EXAM_DETAILS:
      return {
        ...state,
        studentExamDetails: action.studentExamDetails
      }
    case GET_MATH_DETAILS:
      return {
        ...state,
        mathExamDetails: action.mathExamDetails
      }
    case GET_READING_DETAILS:
      return {
        ...state,
        readingExamDetails: action.readingExamDetails
      }
    case GET_WRITING_DETAILS:
      return {
        ...state,
        writingExamDetails: action.writingExamDetails
      }
    default:
      return state
  }
}
