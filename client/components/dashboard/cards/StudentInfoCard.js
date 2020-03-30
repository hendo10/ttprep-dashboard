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
    minWidth: 650
  },
  header: {
    alignItems: 'center',
    fontWeight: 'fontWeightBold'
  },
  columnCategories: {
    width: 50
  },
  columnDetails: {
    // width: 100,
    align: 'left'
  }
})

const StudentInfo = props => {
  // const {className, ...rest} = props

  const classes = useStyles()
  // console.log('hello', props.user)
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          {/* <TableRow>
            <TableCell align="center">Student Details</TableCell>
          </TableRow> */}
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell className={classes.columnCategories}>Name:</TableCell>
            <TableCell className={classes.columnDetails}>
              {`${props.studentInfo.firstName} ${props.studentInfo.lastName}`}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.columnCategories}>Address:</TableCell>
            <TableCell className={classes.columnDetails}>
              {props.studentInfo.address}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.columnCategories} />
            <TableCell className={classes.columnDetails}>
              {`${props.studentInfo.city}, ${props.studentInfo.state} ${
                props.studentInfo.zip
              }`}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.columnCategories}>Phone:</TableCell>
            <TableCell className={classes.columnDetails}>
              {props.studentInfo.phone}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.columnCategories}>Email:</TableCell>
            <TableCell className={classes.columnDetails}>
              {props.studentInfo.email}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.columnCategories}>School:</TableCell>
            <TableCell className={classes.columnDetails}>
              {props.studentInfo.school}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default StudentInfo
