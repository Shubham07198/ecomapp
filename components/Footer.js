import {AiFillInstagram, AiOutlineTwitter} from  "react-icons/ai"

import React from 'react'

function Footer() {
  return (
    <div className="footer-container">
      <p>2022 Bass Heads. All rights reserved</p>
      <p className="icons">
        <AiFillInstagram/>
        <AiOutlineTwitter/>
      </p>
    </div>
  )
}

export default Footer