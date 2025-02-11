import React from 'react'
import './Body.css'

function Body(props) {
  return (
    <div>
      <h1 className='body-main'>Main contant</h1>
      {props.children}
    </div>
  )
}

export default Body
