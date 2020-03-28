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

const StudentMathDetails = props => {
  // const {className, ...rest} = props

  const classes = useStyles()

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Category</TableCell>
            <TableCell>Correct</TableCell>
            <TableCell>Incorrect</TableCell>
            <TableCell>Result (%)</TableCell>
            <TableCell>Previous (%)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.mathExamDetails.map(section => {
            return (
              <TableRow hover role="checkbox" tabIndex={-1} key={section.id}>
                <TableCell>{section.category.categoryName}</TableCell>
                <TableCell>{section.correct}</TableCell>
                <TableCell>{section.incorrect}</TableCell>
                <TableCell>{section.score}</TableCell>
                <TableCell> </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default StudentMathDetails
