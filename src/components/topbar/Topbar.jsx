import React from 'react'
import "./topbar.css"
import {NotificationsActive} from '@mui/icons-material';
// import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
export default function Topbar() {
  return (
    <div className='topbar'>
        <div className='topbarWrapper'>
          <div className='topleft'>
              <span className='logo'>DevboltAdmin</span>
          </div>
          <div className='topright'>
              <div className="topbarIcons">
              <NotificationsActive/>
              </div>
          </div>
        </div>
    </div>
  )
}
