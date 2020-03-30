import React from 'react'
import {Link as RouterLink} from 'react-router-dom'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import {makeStyles} from '@material-ui/styles'
import {Avatar, Typography} from '@material-ui/core'
import {connect} from 'react-redux'
// import StudentInfo from './dashboard/cards/StudentInfoCard'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: 'fit-content',
    maxWidth: 200,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 15
  },
  avatar: {
    width: 75,
    height: 75
  },
  name: {
    marginTop: theme.spacing(1)
  }
}))

const UserProfile = props => {
  const {className} = props

  const classes = useStyles()

  const user = {
    name: `${props.firstName} ${props.lastName}`,
    avatar: props.imageUrl
  }

  return (
    <div className={clsx(classes.root, className)}>
      <Avatar alt="Person" className={classes.avatar} src={user.avatar} />
      <Typography className={classes.name} variant="h6">
        {user.name}
      </Typography>
      <Typography variant="body2">Student</Typography>
      {/* <StudentInfo studentInfo={this.props.studentInfo[0]} /> */}
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    firstName: state.user.firstName,
    lastName: state.user.lastName,
    imageUrl: state.user.imageURL
  }
}

export default connect(mapState)(UserProfile)

UserProfile.propTypes = {
  className: PropTypes.string
}
