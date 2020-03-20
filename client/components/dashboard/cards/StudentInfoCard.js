import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles({
  table: {
    minWidth: 850
  },
  header: {
    alignItems: 'center',
    fontWeight: 'fontWeightBold'
  }
})

const StudentInfo = props => {
  // const {className, ...rest} = props

  const classes = useStyles()
  console.log('this.props', props)

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Student Details</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell width="30%">Name:</TableCell>
            <TableCell align="left">
              {`${props.studentInfo.firstName} ${props.studentInfo.lastName}`}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell width="30%">Address:</TableCell>
            <TableCell width="70%" align="left">
              {props.studentInfo.address}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell width="30%" />
            <TableCell width="70%" align="left">
              {`${props.studentInfo.city}, ${props.studentInfo.state} ${
                props.studentInfo.zip
              }`}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell width="30%">Phone:</TableCell>
            <TableCell width="70%" align="left">
              {props.studentInfo.phone}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell width="30%">Email:</TableCell>
            <TableCell width="70%" align="left">
              {props.studentInfo.email}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell width="30%">School:</TableCell>
            <TableCell width="70%" align="left">
              {props.studentInfo.school}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default StudentInfo
