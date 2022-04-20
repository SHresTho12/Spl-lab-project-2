import React from 'react'

const Notification = ({ showNotification }) => {
  return (
    <div className={`notification-container ${showNotification ? 'show' : ''}`}>
      <h2>You have already entered this letter</h2>
    </div>
  )
}

export default Notification
