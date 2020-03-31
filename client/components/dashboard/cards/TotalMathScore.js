import React from 'react'
import clsx from 'clsx'
import {withStyles} from '@material-ui/styles'
import {Card, CardContent, Grid, Typography} from '@material-ui/core'

const useStyles = {
  root: {
    // height: '85%',
    width: '10rem'
  },
  content: {
    alignItems: 'center',
    display: 'flex'
  },
  title: {
    fontWeight: 700,
    color: '#90bbf0'
  },
  goodScore: {
    color: '#047031'
  },
  badScore: {
    color: '#7d0c06'
  },
  difference: {
    marginTop: 10,
    display: 'flex',
    alignItems: 'center'
  }
}

const TotalMathScore = props => {
  const {className, classes} = props

  return (
    <Card className={clsx(classes.root, className)}>
      <CardContent>
        <Grid container justify="space-between">
          <Grid item>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
              variant="body2"
            >
              MATH (10-40)
            </Typography>
            <Typography className={classes.goodScore} variant="h5">
              35
            </Typography>
          </Grid>
        </Grid>
        <div className={classes.difference}>
          <Typography className={classes.caption} variant="caption">
            BENCHMARK: []
          </Typography>
        </div>
      </CardContent>
    </Card>
  )
}

export default withStyles(useStyles)(TotalMathScore)
