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

const StudentExam = props => {
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
        title="Exam History"
      />
      <CardContent className={classes.content}>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
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
      </CardContent>
    </Paper>
  )
}

export default StudentExam
