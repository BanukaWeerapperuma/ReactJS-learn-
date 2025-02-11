import React from 'react'
import './Header.css'
import MenuLink from '../MenuLink/MenuLink'

function header() {
  return (
    <div>
      <div id="navcontent">
        <a href="www.google.com"><img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_120x44dp.png" alt="google" /></a>
        <div>
          <MenuLink linkname="Home" url="#home"/>
          <MenuLink linkname="About" url="#about"/>
          <MenuLink linkname="Contact" url="#contact"/>
        </div>

      </div>
    </div>
  )
}

export default header
