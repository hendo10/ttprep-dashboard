import axios from 'axios'
// import {act} from 'react-test-renderer'

/**
 * ACTION TYPES
 */
const GET_STUDENT_INFO = 'GET_STUDENT_INFO'

// const GET_DOW_ANALYSIS_TABLE = 'GET_DOW_ANALYSIS_TABLE'

/**
 * INITIAL STATE
 */
const initialState = {
  studentInfo: {}
  // DOWAnalysisTable: []
}

/**
 * ACTION CREATORS
 */

const gotStudentInfo = studentInfo => ({
  type: GET_STUDENT_INFO,
  studentInfo
})

// const gotDOWAnalysisTable = (DOWresults, timeInterval) => ({
//   type: GET_DOW_ANALYSIS_TABLE,
//   DOWresults,
//   timeInterval
// })

export const getStudentInfo = userId => async dispatch => {
  try {
    const {data} = await axios.get(`/api/users/${userId}`)
    dispatch(gotStudentInfo(data))
  } catch (error) {
    console.error(error)
  }
}

// export const getDOWAnalysisTable = () => async dispatch => {
//   try {
//     const {data} = await axios.get('/api/summary/DOWAnalysisTable')
//     const correctedDataTypeArr = data.map(row => {
//       const correctedRow = {}
//       for (let key in row) {
//         if (row.hasOwnProperty(key)) {
//           if (key !== 'dayOfWeek') {
//             correctedRow[key] = +row[key]
//           } else {
//             correctedRow[key] = row[key]
//           }
//         }
//       }
//       return correctedRow
//     })
//     dispatch(gotDOWAnalysisTable(correctedDataTypeArr))
//   } catch (err) {
//     console.error(err)
//   }
// }

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
    // case GET_DOW_ANALYSIS_TABLE:
    //   return {
    //     ...state,
    //     DOWAnalysisTable: action.DOWresults
    //   }
    default:
      return state
  }
}
