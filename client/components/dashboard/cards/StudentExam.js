import React from 'react'
import {makeStyles, withStyles} from '@material-ui/core/styles'
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
  }
})

const StyledHeaderCell = withStyles({
  head: {
    fontWeight: 'bold'
  }
})(TableCell)

const StudentExam = props => {
  // const {className, ...rest} = props

  const classes = useStyles()

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <StyledHeaderCell>Test</StyledHeaderCell>
            <StyledHeaderCell>Date</StyledHeaderCell>
            <StyledHeaderCell>R/W</StyledHeaderCell>
            <StyledHeaderCell>Math</StyledHeaderCell>
            <StyledHeaderCell>Total</StyledHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.studentExam.map(exam => (
            <TableRow hover role="checkbox" key={exam.id}>
              <TableCell>{exam.examId}</TableCell>
              <TableCell>{exam.date}</TableCell>
              <TableCell>{exam.readingwriting}</TableCell>
              <TableCell>{exam.math}</TableCell>
              <TableCell>{exam.total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default StudentExam
