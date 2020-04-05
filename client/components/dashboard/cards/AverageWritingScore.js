import React from 'react'
import {Doughnut} from 'react-chartjs-2'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import {makeStyles, useTheme} from '@material-ui/styles'
import {Paper, CardContent, Typography} from '@material-ui/core'
// import LaptopMacIcon from '@material-ui/icons/LaptopMac';
// import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
// import RefreshIcon from '@material-ui/icons/Refresh';
// import TabletMacIcon from '@material-ui/icons/TabletMac';

const useStyles = makeStyles(theme => ({
  root: {
    height: '50%',
    width: '10rem',
    padding: '16px'
  },
  title: {
    fontSize: 'inherit',
    fontWeight: 700,
    margin: '.5em'
    // color: '#1663de'
  },
  chartContainer: {
    position: 'relative',
    height: '100px'
  },
  stats: {
    marginTop: theme.spacing(0),
    display: 'flex',
    justifyContent: 'center'
  },
  score: {
    textAlign: 'center',
    padding: theme.spacing(1)
  },
  scoreIcon: {
    color: theme.palette.icon
  }
}))

const AverageWritingScore = props => {
  const {className, ...rest} = props

  const classes = useStyles()
  const theme = useTheme()

  const avgScore =
    props.studentExam.reduce((accumulator, score) => {
      return score.readingwriting + accumulator
    }, 0) / props.studentExam.length

  const totalDiff = 800 - avgScore

  const data = {
    datasets: [
      {
        data: [avgScore, totalDiff],
        backgroundColor: [
          theme.palette.primary.main,
          theme.palette.primary.light,
          theme.palette.warning.main
        ],
        borderWidth: 1,
        borderColor: theme.palette.white,
        hoverBorderColor: theme.palette.white
      }
    ],
    labels: ['Avg Score', 'Avg Missed']
  }

  const options = {
    legend: {
      display: false
    },
    responsive: true,
    maintainAspectRatio: false,
    animation: false,
    cutoutPercentage: 85,
    layout: {padding: 0},
    tooltips: {
      enabled: true,
      mode: 'index',
      intersect: false,
      borderWidth: 1,
      borderColor: theme.palette.divider,
      backgroundColor: theme.palette.white,
      titleFontColor: theme.palette.text.primary,
      bodyFontColor: theme.palette.text.secondary,
      footerFontColor: theme.palette.text.secondary
    }
  }

  const scores = [
    {
      title: 'Avg Score',
      value: avgScore,
      color: theme.palette.primary.main
    },
    {
      title: 'Avg Missed',
      value: totalDiff,
      color: theme.palette.primary.light
    }
  ]

  return (
    <Paper {...rest} className={clsx(classes.root, className)}>
      <Typography
        className={classes.title}
        color="textSecondary"
        // gutterBottom
        variant="body2"
      >
        DIAG 4
        {/* {`DIAG ${props.studentExam[props.studentExam.length].examId}`} */}
      </Typography>
      <Typography className={classes.caption} variant="caption">
        READING SCORE:
      </Typography>
      <CardContent>
        <div className={classes.chartContainer}>
          <Doughnut data={data} options={options} />
        </div>
        <div className={classes.stats}>
          <Typography>{avgScore}</Typography>
        </div>
      </CardContent>
    </Paper>
  )
}

AverageWritingScore.propTypes = {
  className: PropTypes.string
}

export default AverageWritingScore
