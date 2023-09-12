import React from 'react'
import {AiOutlineGithub} from 'react-icons/ai'
import { Link } from 'react-router-dom'
const BannerFooter = () => {
  return (
    <div className='footer-container'>
      <p>Devloped with ❤ by Rafael Falk</p>
      <p className='icons'>
        <a href='https://github.com/falkrafa' target='_blank'><AiOutlineGithub/></a>
      </p>
    </div>
  )
}

export default BannerFooter