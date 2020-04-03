import React from 'react'
import {withRouter} from 'react-router-dom'
import DashboardIcon from '@material-ui/icons/Dashboard'
import FunctionsIcon from '@material-ui/icons/Functions'
import InsertChartOutlinedIcon from '@material-ui/icons/InsertChartOutlined'
import UserProfile from './UserProfile'
import SidebarNav from './SidebarNav'
// import {Divider} from '@material-ui/core'

const pages = [
  {
    title: 'STUDENT INFO',
    href: '/home',
    icon: <DashboardIcon />
  },
  {
    title: 'EXAM DETAILS',
    href: '/home',
    icon: <InsertChartOutlinedIcon />,
    subPage: {
      title: 'HOME',
      href: '/home',
      icon: <InsertChartOutlinedIcon />
    }
  },
  {
    title: 'EXAM ANALYTICS',
    href: '/home',
    icon: <FunctionsIcon />
  }
]

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-nav-cont">
        <UserProfile />
        <SidebarNav pages={pages} />
      </div>
    </div>
  )
}

export default withRouter(Sidebar)
