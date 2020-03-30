import React from 'react'
import {Doughnut} from 'react-chartjs-2'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import {makeStyles, useTheme} from '@material-ui/styles'
import {
  Card,
  CardHeader,
  CardContent,
  // IconButton,
  Divider,
  Typography
} from '@material-ui/core'
// import LaptopMacIcon from '@material-ui/icons/LaptopMac';
// import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
// import RefreshIcon from '@material-ui/icons/Refresh';
// import TabletMacIcon from '@material-ui/icons/TabletMac';

const useStyles = makeStyles(theme => ({
  root: {
    height: '90%',
    width: '100%'
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

const AverageExamScore = props => {
  const {className, ...rest} = props

  const classes = useStyles()
  const theme = useTheme()

  const data = {
    datasets: [
      {
        data: [1100, 500],
        backgroundColor: [
          theme.palette.primary.main,
          theme.palette.error.main,
          theme.palette.warning.main
        ],
        borderWidth: 5,
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
    cutoutPercentage: 50,
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
      value: '1100',
      color: theme.palette.primary.main
    },
    {
      title: 'Avg Missed',
      value: '500',
      color: theme.palette.error.main
    }
  ]

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardHeader variant="h5" title="Avg Exam Score" />
      <Divider />
      <CardContent>
        <div className={classes.chartContainer}>
          <Doughnut data={data} options={options} />
        </div>
        <div className={classes.stats}>
          {scores.map(score => (
            <div className={classes.score} key={score.title}>
              {/* <span className={classes.deviceIcon}>{device.icon}</span> */}
              <Typography variant="body3">{score.title}</Typography>
              <Typography style={{color: score.color}} variant="h5">
                {score.value}
              </Typography>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

AverageExamScore.propTypes = {
  className: PropTypes.string
}

export default AverageExamScore
