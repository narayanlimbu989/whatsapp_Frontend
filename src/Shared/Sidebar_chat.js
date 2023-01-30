import { Avatar } from '@mui/material'
import React from 'react'

const Sidebarchat = () => {
  return (
    <div className='sidebarChat'>
      <Avatar/>
      <div className="userinfo">
        <p className="roomName">Demo Romm</p>
        <p className="message">This is real time.</p>
      </div>
    </div>
  )
}

export default Sidebarchat
