import React, { Component } from 'react'
import OpenerText from './OpenerText/OpenerText'
import "./OpenerSection.css"

export default class OpenerSection extends Component {
  render() {
    return (
      <section className='openerMain'>
        <OpenerText/>
      </section>
    )
  }
}
