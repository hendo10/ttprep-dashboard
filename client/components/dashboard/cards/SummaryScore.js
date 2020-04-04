import React from 'react'
import clsx from 'clsx'
import {withStyles} from '@material-ui/styles'
import {Card, CardContent, Typography} from '@material-ui/core'

const useStyles = {
  root: {
    // height: '85%',
    width: '100%'
  }
}

const SummaryScoreHeader = props => {
  const {className, classes} = props

  return (
    <Card className={clsx(classes.root, className)}>
      <Typography className={classes.caption} variant="caption">
        {`Score breakdown by sections is based on Test }, 
        taken on `}
      </Typography>
    </Card>
  )
}

export default withStyles(useStyles)(SummaryScoreHeader)
