import React from 'react'
import './topicBox.css'

function topicbox(props) {
  
  return (
    <div>
      <div className="topicBox">
        <span className='text'> topic box {props.food} the peice is{props.price}</span>
        {props.children}
      </div>


    </div>
  )
}

export default topicbox
