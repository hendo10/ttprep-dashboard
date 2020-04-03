import React from 'react'
import cx from 'clsx'
import {makeStyles, withStyles} from '@material-ui/core/styles'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import {useContainedCardHeaderStyles} from '@mui-treasury/styles/cardHeader/contained'
import {useSoftRiseShadowStyles} from '@mui-treasury/styles/shadow/softRise'
import {useFadedShadowStyles} from '@mui-treasury/styles/shadow/faded'

const useStyles = makeStyles(({spacing}) => ({
  card: {
    marginTop: 40,
    borderRadius: spacing(0.5),
    transition: '0.3s',
    width: '65%',
    overflow: 'initial',
    background: '#ffffff'
  },
  content: {
    textAlign: 'left',
    overflowX: 'auto'
  }
}))

const StyledHeaderCell = withStyles({
  head: {
    fontWeight: 'bold'
  }
})(TableCell)

const StudentWritingDetails = props => {
  // const {className, ...rest} = props

  const classes = useStyles()

  const cardHeaderStyles = useContainedCardHeaderStyles()
  const cardShadowStyles = useSoftRiseShadowStyles({inactive: true})
  const cardHeaderShadowStyles = useFadedShadowStyles()

  return (
    <Paper className={cx(classes.card, cardShadowStyles.root)}>
      <CardHeader
        className={cardHeaderShadowStyles.root}
        classes={cardHeaderStyles}
        title="Writing Details"
      />
      <CardContent className={classes.content}>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
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
      </CardContent>
    </Paper>
  )
}

export default StudentWritingDetails
