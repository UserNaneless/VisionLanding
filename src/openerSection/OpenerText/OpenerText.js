import React, { Component } from 'react'
import "./OpenerText.css"

export default class OpenerText extends Component {
  render() {
    return (
      <div className='openerText'>
        <div className="openerTextWrapper">
            <h1 className="openerTextTitle">Vision</h1>
            <div className="openerTextMainText">​Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
            <div className="openerTextMini">Image from Freepick</div>
            <button className="mainButton openerTextButton">read more</button>
        </div>

      </div>
    )
  }
}
