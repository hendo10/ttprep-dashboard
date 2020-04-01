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
  },
  columnCategories: {
    width: 50
  },
  columnDetails: {
    // width: 100,
    align: 'center'
  }
})

const StyledHeaderCell = withStyles({
  head: {
    fontWeight: 'bold'
  }
})(TableCell)

const StudentWritingDetails = props => {
  // const {className, ...rest} = props

  const classes = useStyles()

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <StyledHeaderCell>Category</StyledHeaderCell>
            <StyledHeaderCell>Correct</StyledHeaderCell>
            <StyledHeaderCell>Incorrect</StyledHeaderCell>
            <StyledHeaderCell>Result (%)</StyledHeaderCell>
            <StyledHeaderCell>Previous (%)</StyledHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.writingExamDetails.map(section => {
            return (
              <TableRow hover role="checkbox" tabIndex={-1} key={section.id}>
                <TableCell>{section.category.categoryName}</TableCell>
                <TableCell align="center">{section.correct}</TableCell>
                <TableCell align="center">{section.incorrect}</TableCell>
                <TableCell align="center">{section.score}</TableCell>
                <TableCell align="center"> </TableCell>
              </TableRow>
            )
          })}
          <TableRow role="checkbox" tabIndex={-1}>
            <TableCell>Total</TableCell>
            <TableCell align="center">
              {props.writingExamDetails.reduce((accumulator, score) => {
                return score.correct + accumulator
              }, 0)}
            </TableCell>
            <TableCell align="center">
              {props.writingExamDetails.reduce((accumulator, score) => {
                return score.incorrect + accumulator
              }, 0)}
            </TableCell>
            <TableCell align="center" />
            <TableCell align="center" />
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default StudentWritingDetails
